'use client'
import Image from "next/image";
import { BedDouble, CalendarIcon, Star, User } from "lucide-react"
import { format } from "date-fns"

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cormorant, ebGaramond, raleway } from "../app/font";
import Link from "next/link";
import * as z from "zod"
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { animate, splitText, stagger } from "animejs";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    totalPrice: z.number().optional(),
    roomType: z.string().optional(),
    nbPrsn: z
        .string()
        .min(1, "Entrez nombre des personnes")
        .regex(/^[1-9][0-9]*$/, "Nombre invalide"),
    nbRooms: z
        .string()
        .min(1, "Entrez nombre des chambres")
        .regex(/^[1-9][0-9]*$/, "Nombre invalide"),
    dateRange: z.object({
        from: z.date(),
        to: z.date(),
    }).refine(data => data.from && data.to, {
        message: "Veuillez sélectionner les deux dates",
        path: ["from"],
    }),
})

export type Step1Data = z.infer<typeof formSchema>;

export default function HeroSection({ title, subTitle, description, isForm, type, HeroSectionImage, onSearch }: {
    title?: string,
    subTitle?: string,
    description?: string
    isForm?: boolean,
    type?: string,
    HeroSectionImage?: string,
    onSearch?: (data: Step1Data) => void
}) {

    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!h1Ref.current) return;

        const { chars } = splitText(h1Ref.current, {
            chars: { wrap: 'clip' },
        });

        animate(chars, {
            translateY: ['100%', '0%'],
            duration: 400,
            ease: 'out(3)',
            delay: stagger(50),
        });
    }, []);


    const router = useRouter()

    const [step1Data, setStep1Data] = useState<Step1Data | null>(null);

    const onStep1Submit = (data: Step1Data) => {
        setStep1Data(data);
        //setOpenForm(true)
        if (onSearch) {
            // booking page: lift state up
            onSearch(data);
        } else {
            // home page: navigate to booking with query params
            const params = new URLSearchParams({
                nbPrsn: data.nbPrsn,
                nbRooms: data.nbRooms,
                from: data.dateRange.from ? data.dateRange.from.toISOString() : '',
                to: data.dateRange.to ? data.dateRange.to.toISOString() : '',
            })
            router.push(`/booking?${params.toString()}`)
        }

    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nbPrsn: "",
            nbRooms: "",
            dateRange: {
                from: undefined,
                to: undefined,
            },

        },
    })
    const navPages = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About us",
            url: "/hotel",
        },
        {
            name: "Rooms",
            url: "/accommodation",
        },
        {
            name: "Wellness",
            url: "/wellness-spa",
        },
        {
            name: "Gastronomy",
            url: "/gastro",
        },
        {
            name: "Contact",
            url: "/contact",
        },

    ]

    return (
        <div
            className=" min-h-screen relative flex flex-col"
            style={{ backgroundImage: `url('${HeroSectionImage ? HeroSectionImage : "/RoomPresentation.png"}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black/30" />
            {/* Top Banner - padded top to sit below the absolute nav */}
            <div className="backdrop-blur-sm bg-white/10 border-b border-white/30 relative text-white">
                <div className="Header flex justify-center w-full gap-4 border-b border-white/30 text-3xl items-center py-4 z-11">
                    <div className={`${cormorant.className} text-xl font-bold text-white/70 hidden md:block cursor-default hover:text-amber-300 transition-colors`}>2025</div>
                    <div className="">
                        <Link href='/'>
                            <Image
                                src='/assets/logo.png'
                                height={120}
                                width={120}
                                alt="golden Hills"
                                className="brightness-0 invert transition-all duration-300 hover:brightness-100 hover:invert-0"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-1 hover:text-amber-300 transition-colors">
                        <Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} />
                    </div>
                </div>

                <div className={`${raleway.className} uppercase NavBar flex justify-center items-center gap-10 w-full py-4 text-sm font-semibold`}>
                    {
                        navPages.map(
                            (page, index) => (
                                <Link key={index} href={page.url} className="cursor-pointer hover:text-amber-300 transition-colors">
                                    {page.name}
                                </Link>
                            )
                        )
                    }

                </div>
            </div>

            {/* Center Hero Content */}
            <div className="flex-1 flex flex-col text-white items-center justify-center relative z-9 text-center gap-2 py-4">
                {
                    subTitle &&
                    (
                        <h2 className={`${ebGaramond.className} text-amber-400 tracking-widest uppercase text-2xl font-medium`}>
                            {subTitle}
                        </h2>
                    )
                }
                {
                    title && (
                        <h1 className={`${cormorant.className}  ${type === "aboutUs" ? "text-6xl" : "text-8xl"} max-w-2/3 tracking-wide font-bold capitalize ${type === "home" ? "text-amber-300" : "text-white"}`}
                            ref={h1Ref}
                        >
                            {title}
                        </h1>
                    )
                }
                {
                    description && (
                        <p className={`${raleway.className} text-white tracking-wider text-xl mt-2 mb-10 max-w-2/6`}>
                            {description}
                        </p>
                    )
                }
                <div>
                    {/*
          <ReservationForm />
          */}
                    {
                        isForm && (
                            <div className="w-full bg-white p-6 rounded-sm">
                                <div className="flex flex-col md:flex-row flex-wrap md:items-end gap-6 text-black">
                                    <form onSubmit={form.handleSubmit(onStep1Submit)} className="flex flex-col md:flex-row flex-wrap md:items-end gap-6">
                                        {/* Date Picker */}
                                        <Controller
                                            name="dateRange"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field className="w-full md:w-64" data-invalid={fieldState.invalid}>
                                                    <FieldLabel
                                                        htmlFor="date-picker-range"
                                                        className={`${ebGaramond.className} text-md font-medium`}
                                                    >
                                                        Check In - Check Out
                                                    </FieldLabel>

                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <button
                                                                id="date-picker-range"
                                                                type="button"
                                                                className={`${raleway.className} w-full box-border bg-white/5 border rounded-xs py-1 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none focus:outline-none focus:ring-0 flex items-center gap-2
                            ${fieldState.invalid ? "border-red-500/60" : "border-[#d4af35]/70"}`}
                                                            >
                                                                <CalendarIcon size={16} className="text-[#d4af35]/60 shrink-0" />
                                                                {field.value?.from ? (
                                                                    field.value.to ? (
                                                                        <span>{format(field.value.from, "LLL dd, y")} — {format(field.value.to, "LLL dd, y")}</span>
                                                                    ) : (
                                                                        <span>{format(field.value.from, "LLL dd, y")}</span>
                                                                    )
                                                                ) : (
                                                                    <span className="text-gray-500">Pick a date</span>
                                                                )}
                                                            </button>
                                                        </PopoverTrigger>

                                                        <PopoverContent className={`w-auto p-0 ${raleway.className}`} align="start">
                                                            <Calendar
                                                                className="text-black bg-white"
                                                                mode="range"
                                                                defaultMonth={field.value?.from}
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                numberOfMonths={2}
                                                                disabled={{ before: new Date() }}
                                                            />
                                                        </PopoverContent>
                                                    </Popover>

                                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                </Field>
                                            )}
                                        />


                                        {/* Personnes */}
                                        <Controller
                                            name="nbPrsn"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid} className="w-full md:w-40">
                                                    <FieldLabel htmlFor="form-rhf-nbPrsn" className={`${ebGaramond.className} text-md font-medium`}>
                                                        Nombre des personnes
                                                    </FieldLabel>
                                                    <div className="relative">
                                                        <Input
                                                            {...field}
                                                            id="form-rhf-nbPrsn"
                                                            aria-invalid={fieldState.invalid}
                                                            placeholder="Ex: 1"
                                                            autoComplete="off"
                                                            className={`${raleway.className} w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 pr-9 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-[#d4af35]/70 `}
                                                        />
                                                        <User size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4af35]/60 pointer-events-none" />
                                                    </div>
                                                    {
                                                        //fieldState.invalid && <FieldError errors={[fieldState.error]} />
                                                    }
                                                </Field>
                                            )}
                                        />

                                        {/* Chambres */}
                                        <Controller
                                            name="nbRooms"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid} className="w-full md:w-40">
                                                    <FieldLabel htmlFor="form-rhf-nbRooms" className={`${ebGaramond.className} text-md font-medium`}>
                                                        Nombre des chambres
                                                    </FieldLabel>
                                                    <div className="relative">
                                                        <Input
                                                            {...field}
                                                            id="form-rhf-nbRooms"
                                                            aria-invalid={fieldState.invalid}
                                                            placeholder="Ex: 1"
                                                            autoComplete="off"
                                                            className={`${raleway.className} w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 pr-9 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-[#d4af35]/70`}
                                                        />
                                                        <BedDouble size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4af35]/60 pointer-events-none" />
                                                    </div>
                                                    {
                                                        //fieldState.invalid && <FieldError errors={[fieldState.error]} />
                                                    }
                                                </Field>
                                            )}
                                        />


                                        {/* Button */}
                                        <Button
                                            type="submit"
                                            className={`${ebGaramond.className} bg-[#d4af37] text-[#0f1923] border-none py-3 px-7 text-[12px] tracking-[0.2em] uppercase font-bold cursor-pointer rounded-sm`}
                                        //onClick={() => setOpenForm(true)}
                                        >
                                            Réserver
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>

        </div >
    );
}