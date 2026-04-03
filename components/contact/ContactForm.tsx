'use client'
import { cormorant, ebGaramond, raleway } from '@/app/font'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { Button } from '../ui/button'

const formSchema = z.object({
    fullName: z
        .string()
        .min(4, "Full name must be at least 4 characters.")
        .max(32, "Full name must be at most 32 characters."),
    contact: z
        .string()
        .min(9, "Contact must be at least 9 characters.")
        .max(50, "Contact must be at most 50 characters."),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters.")
        .max(500, "Message must be at most 500 characters."),
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            contact: "",
            message: "",
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div className='w-11/12 xl:w-3/6 border p-8'>
                <div className="header mb-4 flex flex-col gap-4 justify-center items-center">
                    <h1 className={`${cormorant.className} font-semibold text-4xl`}>
                        Contact Form
                    </h1>
                    <p className={`${raleway.className} uppercase font-semibold w-2/3 text-center`}>
                        Can't find the contact and information you're looking for? Write to us via this quick form.
                    </p>
                </div>

                <div className='p-4'>
                    <form id="form-rhf-booking" onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Field data-invalid={!!errors.fullName}>
                                <FieldLabel htmlFor="form-rhf-fullname" className="text-md text-[#d4af35]/90">
                                    Full Name
                                </FieldLabel>
                                <Input
                                    {...register("fullName")}
                                    id="form-rhf-fullname"
                                    aria-invalid={!!errors.fullName}
                                    placeholder="John Doe"
                                    autoComplete="off"
                                    className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none"
                                />
                                {errors.fullName && <FieldError errors={[errors.fullName]} />}
                            </Field>

                            <Field data-invalid={!!errors.contact}>
                                <FieldLabel htmlFor="form-rhf-contact" className="text-md text-[#d4af35]/90">
                                    Contact
                                </FieldLabel>
                                <Input
                                    {...register("contact")}
                                    id="form-rhf-contact"
                                    aria-invalid={!!errors.contact}
                                    placeholder="Email or phone number"
                                    autoComplete="off"
                                    className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none"
                                />
                                {errors.contact && <FieldError errors={[errors.contact]} />}
                            </Field>

                            <Field data-invalid={!!errors.message}>
                                <FieldLabel htmlFor="form-rhf-message" className="text-md text-[#d4af35]/90">
                                    Message
                                </FieldLabel>
                                <textarea
                                    {...register("message")}
                                    id="form-rhf-message"
                                    aria-invalid={!!errors.message}
                                    placeholder="Write your message here..."
                                    autoComplete="off"
                                    rows={5}
                                    className="w-full box-border bg-white/5 border border-[#d4af35]/70 rounded-xs py-2.75 px-3.5 text-stone-800 placeholder:text-gray-500 text-[14px] outline-none resize-none"
                                />
                                {errors.message && <FieldError errors={[errors.message]} />}
                            </Field>
                        </FieldGroup>
                        <Button
                            type="submit"
                            className={`${ebGaramond.className} mt-4 bg-[#d4af37] text-[#0f1923] border-none py-3 px-7 text-[12px] tracking-[0.2em] uppercase font-bold cursor-pointer rounded-sm`}
                        //onClick={() => setOpenForm(true)}
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm