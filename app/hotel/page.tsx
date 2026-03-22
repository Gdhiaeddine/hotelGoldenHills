import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'
import { cormorant, ebGaramond, raleway } from '../font'
import { Button } from '@/components/ui/button'

const page = () => {
    const subTitle = 'Golden Hills Hotel & Spa'
    const title = 'One of the most popular hotels in Sétif'
    const features = [
        'Helpful staff',
        'Family atmosphere',
        'Own thermal spring',
        'Extensive wellness center',
        'Exceptional gastronomy',
        'In the heart of Slovakia',
        'Congress center',
    ]

    const type = "aboutUs"
    const HeroSectionImage = '/assets/hotelOutside.jpg'
    return (
        <div>
            <HeroSection subTitle={subTitle} title={title} type={type} HeroSectionImage={HeroSectionImage} />
            <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">
                {/* Items list — sticks while images scroll */}
                <div className="flex-1 flex justify-center items-center text-center w-2/3">
                    <div className="py-7 flex flex-col gap-6">
                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Dear guests, we would like to welcome you in our Wellness Hotel Golden Hills.
                        </h2>

                        <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed  mx-auto">
                            Your favourite place to stay is the one where our family story is being made.  Our family has been dedicated to the restaurant and hotel business since 2025, when the thoughts and ideas of my father gradually transformed into the exceptional place in the heart of Sétif, this hotel. It lies in Sétif, the unique place where underground hot springs converge, near the famous and unique spa Sliač and Kováčová, that is where we have built Kaskady. Thanks to you, our guests, it became one of the most popular and most successful hotels in Algeria.
                        </p>
                    </div>
                </div>
                {/* Images — scrolls normally */}
                <div className="flex-1 max-w-1/2">
                    <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                        <Image
                            src='/assets/HotelReception.jpg'
                            alt="Hotel Presentation"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center">
                <div className="w-full max-w-3/5 flex justify-between items-start gap-12 px-12 pt-16 pb-4 mx-auto">


                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center text-center">

                        <div className="py-7 ">
                            {
                                features.map((feature, index) => (
                                    <p key={index}>
                                        {feature}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    {/* Images — scrolls normally */}
                    <div className="flex-1 flex flex-col gap-4">
                        <Image
                            src='/RoomPresentation.png'
                            width={300}
                            height={400}
                            alt="gastro"
                            className="w-full object-cover"
                            style={{ aspectRatio: '4/5' }}
                        />
                        <Image
                            src='/RoomPresentation.png'
                            width={500}
                            height={600}
                            alt="gastro"
                            className="w-full object-cover"
                            style={{ aspectRatio: '4/5' }}
                        />
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className={`${raleway.className} uppercase font-semibold`}>
                    About us
                </h2>
                <div className={`${ebGaramond.className} text-7xl max-w-3/5 text-center mb-8`}>
                    <h1>
                        Thanks to the satisfaction of our guests, the hotel grows
                    </h1>
                    <h1 className="text-gray-600">
                        and modernizes every year
                    </h1>
                </div>
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
            <div className='flex flex-col gap-6 items-center justify-center'>
                <h1 className={`${cormorant.className} font-semibold max-w-1/2 text-4xl`}>
                    We care very much about making you feel comfortable with us, so feedback on our services is very important to us. Thanks to the satisfaction of our guests, the hotel grows and modernizes every year.
                </h1>
                <p className={`${cormorant.className} font-semibold max-w-1/2 text-2xl`}>
                    If our services do not meet your expectations, please contact us, we will do everything to resolve your requirements. Therefore, do not hesitate to contact our staff, who are here for you. We are grateful for our team of employees who have been with us for 15 years and together share our sense of hospitality.
                </p>
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
            <div className="h-[80vh] flex flex-col items-center justify-center">
                <h2 className={`${raleway.className} uppercase font-semibold`}>
                    Services
                </h2>
                <div className={`${ebGaramond.className} text-7xl max-w-3/5 text-center mb-8`}>
                    <h1>
                        Our offer is mainly focused on the prevention of health and
                    </h1>
                    <h1 className="text-gray-600">
                        maintaining youth, vitality
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className='grid grid-cols-2 gap-8'>
                    <div
                        className="relative h-180 w-140"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            aspectRatio: '4/5',

                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className={`p-2 flex flex-col gap-10 text-white items-center justify-between text-center font-medium text-lg`}>
                                <h2 className={`${raleway.className} font-semibold`}>SPA</h2>
                                <h1 className={`${cormorant.className} text-2xl font-semibold`}>An oasis of peace and relaxation</h1>
                                <div className='bg-white/50 w-max px-4 py-2 rounded-full'>
                                    Wellness
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative h-180 w-140"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            aspectRatio: '4/5',

                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className={`p-2 flex flex-col gap-10 text-white items-center justify-between text-center font-medium text-lg`}>
                                <h2 className={`${raleway.className} font-semibold`}>SPA</h2>
                                <h1 className={`${cormorant.className} text-2xl font-semibold`}>An oasis of peace and relaxation</h1>
                                <div className='bg-white/50 w-max px-4 py-2 rounded-full'>
                                    Wellness
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative h-180 w-140"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            aspectRatio: '4/5',

                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className={`p-2 flex flex-col gap-10 text-white items-center justify-between text-center font-medium text-lg`}>
                                <h2 className={`${raleway.className} font-semibold`}>SPA</h2>
                                <h1 className={`${cormorant.className} text-2xl font-semibold`}>An oasis of peace and relaxation</h1>
                                <div className='bg-white/50 w-max px-4 py-2 rounded-full'>
                                    Wellness
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative h-180 w-140"
                        style={{
                            backgroundImage: "url('/RoomPresentation.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            aspectRatio: '4/5',

                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className={`p-2 flex flex-col gap-10 text-white items-center justify-between text-center font-medium text-lg`}>
                                <h2 className={`${raleway.className} font-semibold`}>SPA</h2>
                                <h1 className={`${cormorant.className} text-2xl font-semibold`}>An oasis of peace and relaxation</h1>
                                <div className='bg-white/50 w-max px-4 py-2 rounded-full'>
                                    Wellness
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page