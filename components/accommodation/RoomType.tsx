import { cormorant, ebGaramond, raleway } from '@/app/font'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Image from 'next/image'
import RoomTypeCard from './RoomTypeCard'

const RoomType = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-14 max-w-3/5 mx-auto mt-24'>

            <div className='h-[50vh] flex justify-center items-center'>
                <h1 className={`${ebGaramond.className} text-5xl text-center`}>
                    Do you prefer accommodation directly in a hotel, with all the services and comforts that belong to it? We offer comfortably furnished rooms and modern suits.
                </h1>
            </div>

            <RoomTypeCard imagePath='/assets/rooms/RoomPresentation.jpg' imageAlt='room' AccommodationType='Rooms' AccommodationDescription='Comfortably furnished smaller accommodation.' BtnContent='Choose' BtnPath='accommodation/rooms' />
            <RoomTypeCard imagePath='/assets/suites/SuitePresentation.jpg' imageAlt='Suites' AccommodationType='Suites' AccommodationDescription='Spacious accommodation with stylish furnishings.' BtnContent='Choose' BtnPath='accommodation/suites' />

        </div>
    )
}

export default RoomType