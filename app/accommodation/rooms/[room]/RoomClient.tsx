"use client";

import { cormorant, raleway } from "@/app/font";
import RoomDetails from "@/components/accommodation/RoomDetails";
import BookingInformation from "@/components/BookingInformation";
import HeaderContent from "@/components/HeaderContent";
import HeroSection from "@/components/HeroSection";
import { Room } from "@/data/rooms";
import Image from "next/image";

const RoomClient = ({ room }: { room: Room }) => {
    const subTitle = 'Rooms'
    const title = 'Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.'
    const HeroSectionImage = room.images[0].path
    return (
        <div className='min-h-screen'>
            <HeroSection title={room.name} HeroSectionImage={HeroSectionImage} />
            <div className='min-h-screen flex justify-center items-center'>
                <HeaderContent subtitle={subTitle} title={title} />
            </div>
            <div className='flex gap-4 p-4'>
                <div className='w-1/2'>
                    <div className='max-w-2/3 mx-auto'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <h1 className={`${cormorant.className} text-2xl font-bold`}>
                                About accommodation
                            </h1>
                            {
                                room.about.map(
                                    (about, index) => (
                                        <p key={index} className={raleway.className}>
                                            {about}
                                        </p>
                                    )
                                )
                            }
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <h1 className={`${cormorant.className} text-2xl font-bold`}>
                                Information
                            </h1>
                            {
                                room.information.map(
                                    (info, index) => (
                                        <p key={index} className={raleway.className}>
                                            {info}
                                        </p>
                                    )
                                )
                            }
                        </div>
                        <div>
                            <h1 className={`${cormorant.className} text-2xl font-bold`}>
                                Equipment
                            </h1>
                            <div>
                                {
                                    room.equipements.map((equipment, index) => (
                                        <div key={index} className={raleway.className}>
                                            <h2>
                                                {equipment.name}
                                            </h2>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <RoomDetails room={room} />
            </div>
            <div className='min-h-screen flex flex-col items-center p-4'>
                <HeaderContent subtitle='Gallery' title={room.type} />
                <div className='flex flex-col gap-4'>
                    {room.images.map((image, index) => (
                        <div key={index} className="relative h-[70vh] w-[100vh]">
                            <Image
                                src={image.path}
                                alt={image.alt}
                                fill
                                className='object-cover'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <BookingInformation />
        </div>
    )
}

export default RoomClient