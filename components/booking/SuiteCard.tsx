'use client'
import { cormorant, raleway } from '@/app/font'
import { Suite } from '@/data/rooms'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HotelBooking from '../Reservation'
import { Step1Data } from '../HeroSection'

type SuiteCardProps = {
    room: Suite
    nights: number
    rooms: number
    data: Step1Data
}


const SuiteCard = ({ room, nights, rooms, data }: SuiteCardProps) => {
    const totalPrice = room.price * nights * rooms
    const avgPerNight = room.price * rooms
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [step1Data, setStep1Data] = useState<Step1Data>({ ...data, roomType: room.name, totalPrice: totalPrice });

    useEffect(() => {
        setStep1Data({ ...data, roomType: room.name, totalPrice: totalPrice })
    }, [data])

    const handleCloseForm = () => {
        setOpenForm(false)
    }
    return (
        <div className='bg-[#0c0a06] rounded-xl overflow-hidden w-3/5' style={{ border: '1px solid rgba(201,169,110,0.2)' }}>
            <div className='flex flex-col xl:flex-row'>
                <div className='relative h-75 w-full xl:w-100 shrink-0'>
                    <Image
                        src={room.images[0].path}
                        alt={room.images[0].alt}
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col gap-4 p-8 w-full'>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center justify-between'>
                        <h1 className={`${cormorant.className} text-2xl font-bold text-[#F5EDD6]`}>
                            {room.name}
                        </h1>
                        <Link href={`/accommodation/suites/${room.slug}`}>
                            <p className={`${raleway.className} text-sm font-medium cursor-pointer underline text-[#C9A96E]`}>
                                Détails de suite
                            </p>
                        </Link>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 justify-between'>
                        <div>
                            <h1 className={`${cormorant.className} text-xl font-semibold text-[#F5EDD6]/70`}>Tarif flexible</h1>
                        </div>
                        <div className='text-sm text-[#F5EDD6]/60'>
                            <div className='flex items-center gap-2'>
                                <h1 className='font-bold text-xl text-[#C9A96E]'>{avgPerNight.toLocaleString('fr-DZ')}</h1>
                                <p>DZD Prix moyen</p>
                            </div>
                            <p>par nuit</p>
                            <p>{totalPrice.toLocaleString('fr-DZ')} Total par chambre</p>
                        </div>
                        <div className='w-max capitalize text-[#0c0a06] bg-[#C9A96E] rounded-full flex items-center px-8 py-2 max-h-max my-auto cursor-pointer'
                            onClick={() => setOpenForm(true)}>
                            <h1 className={`${raleway.className} text-sm font-semibold`}>
                                Book
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {openForm && <HotelBooking data={step1Data} onClose={() => setOpenForm(false)} />}
        </div>
    )
}

export default SuiteCard