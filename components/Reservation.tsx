import { useState } from "react";
import { ebGaramond } from "../app/font";
import { X } from "lucide-react";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Step1Data } from "./HeroSection";

const steps = ["Details", "Confirmation", "Review"];

const formatDate = (d: string | number | Date | undefined) =>
  d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—";

const formSchema = z.object({
  name: z
    .string()
    .min(4, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  phone: z
    .string()
    .min(9, "Description must be at least 20 characters.")
    .max(15, "Description must be at most 100 characters."),
  email: z
    .union([z.string().email("Invalid email address"), z.literal("")])
    .optional(),

  note: z
    .union([
      z.string().min(5, "Note must be at least 5 characters.").max(250),
      z.literal(""),
    ])
    .optional(),
})

interface BookingValues extends Step1Data {
  name?: string;
  email?: string;
  phone?: string;
  note?: string;
  totalPrice?: number;
}


export default function HotelBooking({ data, onClose }: {
  data: Step1Data;
  onClose?: () => void
}) {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);
  const [hero, setHero] = useState(data);
  const [agreed, setAgreed] = useState(false);
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<BookingValues>({ ...data })


  const handleBook = () => {
    if (!hero?.dateRange.from || !hero.dateRange.to) return;
    setStep(0);
    setAgreed(false);
    setDone(false);
    setShowModal(true);
  };


  const next = async () => {
    if (step === 0) {
      const valid = await form.trigger(); // triggers Zod validation for all fields
      if (!valid) return;
    }
    setStep((s) => s + 1);
    setValues({ ...values, ...form.getValues() });
  };

  const confirm = async () => {
  if (!agreed) return;
  const payload = {
    typeRoom: hero.roomType,
    name: values.name,
    email: values.email,
    phone: values.phone,
    note: values.note,
    checkIn: formatDate(hero.dateRange.from),
    checkOut: formatDate(hero.dateRange.to),
    nights,
    nbRooms: hero.nbRooms,
    nbPrsn: hero.nbPrsn,
  };

  try {
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json();
      console.error('Booking error:', err);
      return; 
    }
    setDone(true); 
  } catch (err) {
    console.error(err);
  }
};


  const nights =
    hero?.dateRange.from && hero.dateRange.to
      ? Math.max(
        0,
        Math.round(
          (hero.dateRange.to.getTime() - hero.dateRange.from.getTime()) / 86400000
        )
      )
      : 0;

  //const total = nights * hero.rooms * 180;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      note: "",
    },
  })
  return (
    <div
      className={`${ebGaramond.className} z-12 absolute bg-black`}
    >

      <div
        className="fixed flex z-50 items-center justify-center bg-black/30 inset-0 p-4 backdrop-blur-sm"
      >
        <div
          className="w-full max-w-xl overflow-y-auto rounded-md relative bg-white max-h-screen"
          style={{ border: "1px solid rgba(212,175,55,0.4)" }}
        >
          {/* Close */}
          <button onClick={() => { setShowModal(false); onClose?.(); }}
            className="absolute bg-none border-0 cursor-pointer leading-none text-2xl top-4 right-5 text-[#888]"
          >
            <X />
          </button>

          {!done ? (
            <>
              {/* Step indicator */}
              <div style={{ padding: "28px 32px 0" }}>
                <div
                  className="flex items-center gap-0 mb-7"
                >
                  {steps.map((s, i) => (
                    <div key={i}
                      className="flex items-center"
                      style={{ flex: i < steps.length - 1 ? 1 : 0 }}
                    >
                      <div
                        className="flex flex-col items-center justify-center gap-6"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300 ${i <= step ? "bg-[#d4af37] border-2 border-[#d4af37] text-[#0f1923]" : "bg-[#ddd] border-2 border-white/15 text-[#666]"}`}
                        >
                          {i < step ? "✓" : i + 1}
                        </div>
                        <span
                          style={{ fontSize: 12, color: i === step ? "#d4af37" : "#555", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}
                        >{s}</span>
                      </div>
                      {i < steps.length - 1 && <div style={{ flex: 1, height: 1, background: i < step ? "#d4af37" : "#ddd", margin: "0 8px 20px", transition: "all .3s" }} />}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: "0 32px 32px" }}>
                {/* STEP 0 */}
                {step === 0 && (
                  <div>
                    <h1 className={`${ebGaramond.className} font-medium`}>
                      Booking For : {values.roomType}
                    </h1>
                    <h3
                      //style={modalTitleStyle} 
                      className="text-black text-2xl font-medium">Your Details</h3>
                    <p
                      className="text-gray-700 text-sm font-medium mb-2"
                    >Please provide your contact information</p>
                    <form id="form-rhf-booking"
                    >


                      <FieldGroup>
                        <Controller
                          name="name"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="form-rhf-fullname" className={`${ebGaramond.className} text-md text-[#d4af35]/90`}>
                                Full Name
                              </FieldLabel>
                              <Input
                                {...field}
                                id="form-rhf-name"
                                aria-invalid={fieldState.invalid}
                                placeholder="John Doe"
                                autoComplete="off"
                                className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        <Controller
                          name="phone"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="form-rhf-phone" className={`${ebGaramond.className} text-md text-[#d4af35]/90`}>
                                Phone Number
                              </FieldLabel>
                              <Input
                                {...field}
                                id="form-rhf-phone"
                                aria-invalid={fieldState.invalid}
                                placeholder="+213 555 00 00 00"
                                autoComplete="off"
                                className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        <Controller
                          name="email"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="form-rhf-email" className={`${ebGaramond.className} text-md text-[#d4af35]/90`}>
                                Email Address
                              </FieldLabel>
                              <Input
                                {...field}
                                id="form-rhf-email"
                                aria-invalid={fieldState.invalid}
                                placeholder="john@example.com"
                                autoComplete="off"
                                className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        <Controller
                          name="note"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="form-rhf-note" className={`${ebGaramond.className} text-md text-[#d4af35]/90`}>
                                Note
                              </FieldLabel>
                              <Input
                                {...field}
                                id="form-rhf-note"
                                aria-invalid={fieldState.invalid}
                                placeholder="Your note here"
                                autoComplete="off"
                                className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                      </FieldGroup>
                    </form>

                  </div>
                )}

                {/* STEP 1 */}
                {step === 1 && (
                  <div>
                    <h3
                      className="text-black text-2xl font-medium"
                    >Booking Summary</h3>
                    <p
                      className="text-[#666] text-[12px] tracking-[0.08em] mb-6"
                    >Please confirm your reservation details</p>
                    <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 4, padding: 24, marginBottom: 20 }}>
                      {[
                        ["Guest", values.name],
                        ["Email", values.email],
                        ["Phone", values.phone],
                        ["Check-in", formatDate(hero?.dateRange.from)],
                        ["Check-out", formatDate(hero?.dateRange.to)],
                        ["Duration", `${nights} night${nights > 1 ? "s" : ""}`],
                        ["Rooms", hero?.nbRooms],
                        ["Room Type", data?.roomType],
                        ["Guests", hero?.nbPrsn],
                      ].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          <span
                            className="text-gray-700 text-sm font-medium tracking-wider"
                          >{k}</span>
                          <span
                            className="text-[#d4af35]/90 text-sm font-medium"
                          >{v}</span>
                        </div>
                      ))}

                      <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0" }}>
                        <span style={{ color: "#d4af37", fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>Estimated Total</span>
                        <span style={{ color: "#d4af37", fontSize: 18, fontWeight: 700 }}>{(values.totalPrice ?? 0).toLocaleString()} DA</span>
                      </div>


                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>
                    <h3
                      className="text-black text-2xl font-medium"
                    >Terms & Conditions</h3>
                    <p
                      className="text-[#666] text-[12px] tracking-[0.08em] mb-6"
                    >Please review and agree to complete your booking</p>
                    <div
                      className="bg-[#d4af35]/50 border border-white/10 rounded-lg p-5 h-45 overflow-y-auto mb-5 text-[12px] text-stone-900 leading-[1.7]"
                    >
                      <p style={{ marginTop: 0 }}><strong style={{ color: "#d4af37" }}>Cancellation Policy:</strong> Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will be charged one night's stay.</p>
                      <p><strong
                        style={{ color: "#d4af37" }}>Check-in / Check-out:</strong> Check-in from 3:00 PM, check-out by 12:00 PM. Early/late arrangements subject to availability.</p>
                      <p><strong style={{ color: "#d4af37" }}>Payment:</strong> Full payment is due at check-in. We accept all major credit cards. No cash payments.</p>
                      <p><strong style={{ color: "#d4af37" }}>Guest Conduct:</strong> Hotel Golden Hills reserves the right to refuse service to guests who violate our code of conduct.</p>
                      <p style={{ marginBottom: 0 }}><strong style={{ color: "#d4af37" }}>Liability:</strong> The hotel is not responsible for loss or damage to guest property unless stored in the hotel safe.</p>
                    </div>
                    <label
                      className="flex items-center gap-3 cursor-pointer"
                    //style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
                    >
                      <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
                        style={{ width: 16, height: 16, accentColor: "#d4af37" }} />
                      <span style={{ color: "#ccc", fontSize: 13 }}>I have read and agree to the Terms & Conditions</span>
                    </label>
                  </div>
                )}

                {/* Navigation */}
                <div
                  className='flex justify-between gap-12 mt-7'
                >
                  {step > 0
                    ? <button onClick={() => setStep(s => s - 1)} className="bg-transparent text-[#888] border border-white/10 py-3 px-5 text-[12px] tracking-[0.15em] uppercase cursor-pointer rounded-sm"
                    >← Back</button>
                    : <div />}
                  {step < 2
                    ? <button onClick={next}
                      className="bg-[#d4af37] text-[#0f1923] border-none py-3 px-7 text-[12px] tracking-[0.2em] uppercase font-bold cursor-pointer rounded-sm"
                    >Continue →</button>
                    : <button onClick={confirm} disabled={!agreed}
                      className="bg-[#d4af37] text-[#0f1923] border-none py-3 px-7 text-[12px] tracking-[0.2em] uppercase font-bold cursor-pointer rounded-sm"
                      style={{ opacity: agreed ? 1 : 0.4, cursor: agreed ? "pointer" : "not-allowed" }}>
                      Confirm Booking
                    </button>}
                </div>
              </div>
            </>
          ) : (
            /* SUCCESS */
            <div
              className="py-15 px-8 text-center"
            >
              <div
                className="w-16 h-16 rounded-full bg-[#d4af37]/15 border-2 border-[#d4af37] flex items-center justify-center mx-auto mb-6 text-3xl"
              >✓</div>
              <h3
                className="text-black text-3xl font-medium"
              >Booking Confirmed!</h3>
              <p
                className="text-gray-500 text-sm leading-[1.6] mb-2"
              >Thank you, <strong className="text-[#d4af37] text-lg">{values.name}</strong>.</p>
              <p
                className="text-gray-500 text-sm leading-[1.6] mb-4"
              >A confirmation has been sent to <strong className="text-[#d4af37]">{values.email ? values.email : values.phone}</strong>.</p>
              <div
                className="text-xs tracking-widest text-gray-700"
              >
                {formatDate(hero?.dateRange.from)} → {formatDate(hero?.dateRange.to)} · {nights} nights
              </div>
              <button onClick={() => { setShowModal(false); onClose?.(); }}
                className="bg-[#d4af37] text-[#0f1923] border-none py-3 px-7 text-[12px] tracking-[0.2em] uppercase font-bold cursor-pointer rounded-sm"
                style={{ marginTop: 32 }}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}