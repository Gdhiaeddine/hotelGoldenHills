import HeroSection from '@/components/HeroSection'
import React from 'react'
import { cormorant, ebGaramond, raleway } from '../font'
import Image from 'next/image'
import HeaderContent from '@/components/HeaderContent'

const page = () => {
    const title = "Wellness & SPA"
    const description = "Extensive wellness. Thermal spring. Team of therapists."
    return (
        <div>
            <HeroSection title={title} description={description} />
            <div className='min-h-screen'>
                <div className='h-screen flex flex-col gap-6 items-center justify-center text-center'>
                    <h2 className={`${raleway.className} uppercase font-semibold`}>
                        explore
                    </h2>
                    <h1 className={`${cormorant.className} font-semibold max-w-1/2 text-5xl`}>
                        Far from the everyday life, hustle and trouble, we create magical moments of peace and relaxation.
                    </h1>
                    <p className={`${ebGaramond.className} font-medium max-w-1/4`}>
                        We take care of your body, stimulate your senses and relax your mind. Due to its unique exceptional thermal springs, rich sources of mineral water with beneficial effects on health, especially muscle and joint regeneration, our Wellness & Spa has become synonymous of relaxation and well-being.
                    </p>
                </div>
                <div className="h-screen mx-auto flex items-center justify-center">
                    <div
                        className="relative h-full w-full"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="absolute inset-0 flex justify-center">
                            <div className={`${cormorant.className} absolute bottom-20 font-medium text-5xl text-white`}>
                                <h1>True oasis of relaxation</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <HeaderContent subtitle='Jacuzzi' title='Relaxation Jacuzzi which originates directly from a thermal spring' />
                </div>
                <div className='h-screen flex items-center justify-center max-w-3/5 mx-auto'>
                    <div
                        className="relative h-[80vh] w-full"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                </div>
                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">

                    {/* Images — scrolls normally */}
                    <div className="flex-1 flex flex-col gap-4 max-w-1/2">
                        <Image
                            src='/RoomPresentation.png'
                            width={300}
                            height={400}
                            alt="gastro"
                            className="w-full object-cover"
                            style={{ aspectRatio: '4/5' }}
                        />
                    </div>

                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 flex justify-center items-center text-center w-1/2">
                        <div className="py-7 ">
                            {
                                /* 
                                <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                                Restaurant
                            </h2>
                                */
                            }
                            <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed max-w-2/3 mx-auto">
                                Come and enjoy the water in our relaxation pools which originates directly from a thermal spring and is treated green technology for your health and skin.
                                Exceptional and rich sources of healing mineral water of this locality was the reason for an opening of the Medical Spa & Wellness in Hotel Kaskady. Our priority is your health and perfect rest, which is in the hand of our qualified team of therapists.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-[70vh] flex flex-col gap-6 items-center justify-center text-center'>
                    <h2 className={`${raleway.className} uppercase font-semibold`}>
                        SPA
                    </h2>
                    <h1 className={`${cormorant.className} font-semibold max-w-2/4 text-7xl`}>
                        Enter the sauna world in our Wellness & Spa
                    </h1>
                </div>
                <div className='h-screen flex items-center justify-center max-w-3/5 mx-auto'>
                    <div
                        className="relative h-[80vh] w-full"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                </div>
                <div className='flex justify-center'>
                    <HeaderContent subtitle='Hammam Turk' title='Massages and healing procedures' />
                </div>

                <div className='h-screen flex items-center justify-center max-w-3/5 mx-auto'>
                    <div
                        className="relative h-[80vh] w-full"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>

    )
}
export default page