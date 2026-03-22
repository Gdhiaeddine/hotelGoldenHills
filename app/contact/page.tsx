import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'
import { cormorant, raleway } from '../font'
import { Calendar, Clock, Mail, Phone } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ContactForm from '@/components/contact/ContactForm'
import PrimaryButton from '@/components/PrimaryButton'
import BookingInformation from '@/components/BookingInformation'


const page = () => {
    const title = "Cotnact"
    const description = "Would you like to find our how to get to us or you have a question you need to ask? Call us or e-mail us, here are all the contact information you need to know."

    
    return (
        <div>
            <HeroSection title={title} description={description} />
            <div className='h-[70vh] flex justify-center items-center'>
                <div className='max-w-full flex items-center gap-10'>
                    <div className='flex flex-col items-center gap-6 text-center'>
                        <h2 className={`${raleway.className} uppercase font-semibold`}>Address</h2>
                        <div>
                            <h1
                                className={`${cormorant.className} font-semibold text-5xl`}
                            >Golden Hills Hotel & Spa</h1>
                            <h2 className={`${raleway.className} uppercase font-semibold`}>
                                Rue Champs d'azur, Sétif - Algeria
                            </h2>
                        </div>
                        <PrimaryButton content='More' destination='' />
                    </div>
                    <div>
                        <Image
                            src='/RoomPresentation.png'
                            height={500}
                            width={500}
                            alt='Room'
                        />
                    </div>
                </div>
            </div>
            <BookingInformation />
            <ContactForm />
        </div>
    )
}

export default page