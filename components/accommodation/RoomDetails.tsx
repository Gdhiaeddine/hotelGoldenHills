import { cormorant, raleway } from '@/app/font'
import { Room } from '@/data/rooms'
import { ArrowDownLeft } from 'lucide-react'
import React from 'react'
import BookingBtn from './BookingBtn'
import ContactBtn from './ContactBtn'

const RoomDetails = ({ room }: { room: Room }) => {
    return (
        <div className='w-1/2 bg-gray-100 px-20 py-10 flex flex-col justify-between'>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between border-b-2 border-gray-700'>
                    <h1 className={`${cormorant.className} text-2xl font-bold`}>
                        Type
                    </h1>
                    <p className={`${raleway.className} text-xl font-medium`}>
                        {room.type}
                    </p>
                </div>
                <div className='flex justify-between border-b-2 border-gray-700'>
                    <h1 className={`${cormorant.className} text-2xl font-bold`}>
                        Price
                    </h1>
                    <p className={`${raleway.className} text-xl font-medium`}>
                        {room.price} DA
                    </p>
                </div>
                <div className='flex justify-between border-b-2 border-gray-700'>
                    <h1 className={`${cormorant.className} text-2xl font-bold`}>
                        Number of guests
                    </h1>
                    <p className={`${raleway.className} text-xl font-medium`}>
                        {room.guests}
                    </p>
                </div>
            </div>
            <div className='flex justify-between'>
                <ContactBtn />
                <BookingBtn />
            </div>
        </div>
    )
}

export default RoomDetails