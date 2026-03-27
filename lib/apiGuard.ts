// lib/apiGuard.ts
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { ZodSchema } from "zod";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 m"),
});

export async function apiGuard<T>(
  req: NextRequest,
  schema: ZodSchema<T>,
  handler: (data: T) => Promise<NextResponse>
): Promise<NextResponse> {
  // 1. Méthode
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  // 2. Rate limiting par IP
  const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json({ error: "Trop de requêtes" }, { status: 429 });
  }

  // 3. Turnstile (si activé en prod)
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  if (process.env.NODE_ENV === "production") {
    const turnstileOk = await verifyTurnstile(body["cf-turnstile-response"]);
    if (!turnstileOk) {
      return NextResponse.json({ error: "Vérification humaine échouée" }, { status: 403 });
    }
  }

  // 4. Validation Zod
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  return handler(parsed.data);
}

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!token) return true;
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}