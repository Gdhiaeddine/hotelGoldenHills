"use client";

import { cormorant, raleway } from "@/app/font";
import RoomDetails from "@/components/accommodation/RoomDetails";
import BookingInformation from "@/components/BookingInformation";
import HeaderContent from "@/components/HeaderContent";
import HeroSection from "@/components/HeroSection";
import { Suite } from "@/data/rooms";
import Image from "next/image";

const SuiteClient = ({ suite }: { suite: Suite }) => {

    return (
        <div className='min-h-screen'>
            <HeroSection title={suite.name} HeroSectionImage={suite.images[0].path} />
            <div className='min-h-screen flex justify-center items-center'>
                <HeaderContent subtitle='Suites' title='Comfortably furnished renovated apartment with separate bedroom and living room with sofa bed.' />
            </div>
            <div className='flex flex-col xl:flex-row gap-4 p-4'>
                <div className='xl:w-1/2'>
                    <div className='max-w-11/12 xl:max-w-2/3 mx-auto'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <h1 className={`${cormorant.className} text-2xl font-bold`}>
                                About accommodation
                            </h1>
                            {
                                suite.about.map(
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
                                suite.information.map(
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
                                    suite.equipements.map((equipment, index) => (
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
                <RoomDetails room={suite} />
            </div>
            <div className='min-h-screen flex flex-col items-center p-4'>
                <HeaderContent subtitle='Gallery' title={suite.type} />
                <div className="flex flex-col items-center gap-4 w-full">
                    {suite.images.map((image, index) => (
                        <div key={index} className="relative w-full h-[40vh] xl:w-3/6 xl:h-[70vh]">
                            <Image
                                src={image.path}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <BookingInformation />
        </div>
    )
}

export default SuiteClient