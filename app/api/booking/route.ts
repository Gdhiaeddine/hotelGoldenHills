// app/api/booking/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { apiGuard } from '@/lib/apiGuard';
import { z } from 'zod';

const BookingSchema = z.object({
  typeRoom: z.string().min(1),
  name: z.string().min(2).max(100),
  email: z.union([z.string().email("Invalid email address"), z.literal("")]).optional(),
  phone: z.string().regex(/^\+?[0-9]{8,15}$/),
  note: z.string().max(500).optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  nights: z.coerce.number().int().min(1).optional(),
  nbRooms: z.coerce.number().int().min(1).max(5),
  nbPrsn: z.coerce.number().int().min(1).max(10),
  'cf-turnstile-response': z.string().optional(),
});

export async function POST(req: NextRequest) {
  return apiGuard(req, BookingSchema, async (data) => {
    const message = `
🏨 *Nouvelle Réservation — Hotel Golden Hills*

🛏 *Suite/Chambre:* ${data.typeRoom}
👤 *Nom:* ${data.name}
📧 *Email:* ${data.email ?? '—'}
📞 *Téléphone:* ${data.phone}
📝 *Note:* ${data.note ?? '—'}
📅 *Arrivée:* ${data.checkIn ?? '—'}
📅 *Départ:* ${data.checkOut ?? '—'}
🌙 *Nuits:* ${data.nights ?? '—'}
🚪 *Chambres:* ${data.nbRooms}
👥 *Personnes:* ${data.nbPrsn}
    `.trim();

    const tgRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!tgRes.ok) {
      console.error('Telegram error:', await tgRes.text());
      return NextResponse.json(
        { error: 'Erreur envoi notification' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  });
}