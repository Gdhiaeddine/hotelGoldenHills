'use client'
import HeroSection from '@/components/HeroSection'
import React, { useState } from 'react'
import { cormorant, ebGaramond, raleway } from '../font'
import { ChevronDown } from 'lucide-react'
import RoomType from '@/components/accommodation/RoomType'
import RoomTrigger from '@/components/accommodation/RoomTrigger'

const page = () => {


    const title = "Rooms"
    const description = "Comfortable accommodation directly in the hotel with extensive Wellness and exceptional gastronomy."
    const HeroSectionImage = "/assets/RoomFloor.webp"

    return (
        <div>
            <HeroSection title={title} description={description} HeroSectionImage={HeroSectionImage}/>
            <RoomType />
            <RoomTrigger />

        </div>
    )
}

export default page