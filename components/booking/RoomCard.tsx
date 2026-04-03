'use client'
import { cormorant, raleway } from '@/app/font'
import { Room } from '@/data/rooms'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HotelBooking from '../Reservation'
import { Step1Data } from '../HeroSection'

type RoomCardProps = {
    room: Room
    nights: number
    rooms: number
    data: Step1Data
}



const RoomCard = ({ room, nights, rooms, data }: RoomCardProps) => {
    const totalPrice = room.price * nights * rooms
    const avgPerNight = room.price * rooms
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [step1Data, setStep1Data] = useState<Step1Data>({ ...data, roomType: room.name, totalPrice : totalPrice });

    useEffect(() => {
        setStep1Data({ ...data, roomType: room.name, totalPrice : totalPrice })
    }, [data])

    const handleCloseForm = () => {
        setOpenForm(false)
    }
    return (
        <div className='bg-gray-100 rounded-xl overflow-hidden w-3/5'>
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
                        <h1 className={`${cormorant.className} text-2xl font-bold`}>
                            {room.name}
                        </h1>
                        <Link href={`/accommodation/rooms/${room.slug}`}>
                            <p className={`${raleway.className} text-sm font-medium cursor-pointer underline`}>
                                Détails de chambre
                            </p>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-2 md:flex-row justify-between'>
                        <div>
                            <h1 className={`${cormorant.className} text-xl font-semibold`}>Tarif flexible</h1>
                        </div>
                        <div className='text-sm'>
                            <div className='flex items-center gap-2'>
                                <h1 className='font-bold text-xl'>{avgPerNight.toLocaleString('fr-DZ')}</h1> <p>DZD Prix moyen</p>
                            </div>
                            <p>
                                par nuit
                            </p>
                            <p>
                                {totalPrice.toLocaleString('fr-DZ')} Total par chambre
                            </p>
                        </div>
                        <div className='capitalize w-max text-white bg-[#0c0a06]/90 rounded-full flex items-center px-8 py-2 max-h-max my-auto cursor-pointer' onClick={() => { setOpenForm(true); console.log(step1Data)}}>
                            <h1 className={`${raleway.className} text-sm font-semibold `}>
                                Book
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {
                openForm &&
                <>
                    <HotelBooking data={step1Data} onClose={() => handleCloseForm()} />
                </>
            }
        </div>

    )
}

export default RoomCard