import { ebGaramond, raleway } from '@/app/font'
import Gallery from '@/components/accommodation/Gallery'
import HeaderContent from '@/components/HeaderContent'
import HeroSection from '@/components/HeroSection'
import PrimaryButton from '@/components/PrimaryButton'
import { suites } from '@/data/rooms'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const title = '18 spacious suites'
    const HeaderContentSubTitle = 'Choose'
    const HeaderContentTitle = 'Spacious accommodation with stylish furnishings.'
    const SecondHeaderContentTitle = 'Gallery Rooms'
    const HeroSectionImage = '/assets/suites/SuiteSenior3.jpg'
    const GalleryImages = [
        {
            name: 'Suite Senior',
            path: '/assets/suites/SuiteSenior1.jpg'
        },
        {
            name: 'Suite Senior',
            path: '/assets/suites/SuiteSenior2.jpg'
        },
        {
            name: 'Suite Senior',
            path: '/assets/suites/SuiteSenior3.jpg'
        },
        {
            name: 'Suite Senior',
            path: '/assets/suites/SuiteSenior.jpg'
        },
        {
            name: 'Suite Presentation',
            path: '/assets/suites/SuitePresentation.jpg'
        },
        {
            name: 'Suite Junior',
            path: '/assets/suites/SuiteJunior.jpg'
        },
        {
            name: 'Suite Junior',
            path: '/assets/suites/SuiteJunior1.jpg'
        },
        {
            name: 'Suite Junior',
            path: '/assets/suites/SuiteJunior2.jpg'
        },/*
        {
            name: 'Suite Junior',
            path: '/assets/suites/SuiteJunior3.jpg'
        },*/
    ]
    return (
        <div>
            <HeroSection title={title} HeroSectionImage={HeroSectionImage}/>
            <div className='flex justify-center'>
                <HeaderContent subtitle={HeaderContentSubTitle} title={HeaderContentTitle} />
            </div>
            <div>
                {suites.map((room, index) => {
                    const isEven = index % 2 === 0;

                    const imageBlock = (
                        <div className="flex-1 flex flex-col gap-4 max-w-1/2">
                            <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                                <Image
                                    src={room.images[0].path}
                                    width={500}
                                    height={700}
                                    alt={room.images[0].alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="absolute text-center bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 border px-4 py-2">
                                    <span className={`${raleway.className} text-[#F5EDD6] font-medium tracking-widest text-md uppercase`}>Price</span>
                                    <p className={`${ebGaramond.className} text-[#C9A96E] font-semibold text-xl tracking-wide`}>{room.price} DA</p>
                                </div>
                            </div>
                        </div>
                    );

                    const textBlock = (
                        <div className="flex-1 flex flex-col gap-8 items-center text-center w-1/2">
                            <div className='flex justify-center'>
                                <User />
                            </div>
                            <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                                {room.name}
                            </h2>
                            <PrimaryButton content='More' destination={`/accommodation/suites/${room.slug}`} />
                        </div>
                    );

                    return (
                        <div key={index} className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">
                            {isEven ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center'>
                <HeaderContent title={SecondHeaderContentTitle} />
            </div>
            <Gallery images={GalleryImages}/>
        </div>
    )
}

export default page