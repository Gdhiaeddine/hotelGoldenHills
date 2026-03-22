import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { cormorant, raleway } from '@/app/font'
import Image from 'next/image'

const RoomTypeCard = ({
    imagePath,
    imageAlt,
    AccommodationType,
    AccommodationDescription,
    BtnContent,
    BtnPath,
}:{
    imagePath:string,
    imageAlt: string,
    AccommodationType: string,
    AccommodationDescription: string,
    BtnContent : string,
    BtnPath: string,
}) => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="relative h-[80vh] w-full">

                {/* Background Image */}
                <Image
                    src={imagePath}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-4 py-6 w-1/3">
                        <div className={`${raleway.className} border p-8 text-center font-medium text-lg`}>

                            <h1 className={`text-3xl ${cormorant.className} font-semibold mb-4`}>
                                {AccommodationType}
                            </h1>

                            <p className={`${raleway.className} text-sm mb-4`}>
                                {AccommodationDescription}
                            </p>

                            <div className="inline-block">
                                <PrimaryButton content={BtnContent} destination={BtnPath} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoomTypeCard