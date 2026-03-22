import { ebGaramond, raleway } from '@/app/font'
import Gallery from '@/components/accommodation/Gallery'
import HeaderContent from '@/components/HeaderContent'
import HeroSection from '@/components/HeroSection'
import PrimaryButton from '@/components/PrimaryButton'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const title = '26 spacious suites'
    const HeaderContentSubTitle = 'Choose'
    const HeaderContentTitle = 'Spacious accommodation with stylish furnishings.'
    const SecondHeaderContentTitle = 'Gallery Rooms'

    return (
        <div>
            <HeroSection title={title} />
            <div className='flex justify-center'>
                <HeaderContent subtitle={HeaderContentSubTitle} title={HeaderContentTitle} />
            </div>
            <div>
                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">

                    {/* Images — scrolls normally */}
                    <div className="flex-1 flex flex-col gap-4 max-w-1/2">
                        <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                            <Image
                                src='/RoomPresentation.png'
                                width={500}
                                height={700}
                                alt="gastro"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Price badge */}
                            <div className="absolute text-center bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 border px-4 py-2">
                                <span className={`${raleway.className} text-[#F5EDD6] font-medium tracking-widest text-md uppercase`}>Price</span>
                                <p className={`${ebGaramond.className} text-[#C9A96E] font-semibold text-xl tracking-wide`}>14 000 DA</p>
                            </div>
                        </div>
                    </div>

                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 flex flex-col gap-8 items-center text-center w-1/2">
                        <div className='flex justify-center'>
                            <User />
                        </div>
                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Classic Suite
                        </h2>
                        <PrimaryButton content='More' destination='#' />
                    </div>
                </div>
                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">
                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 flex flex-col gap-8 items-center text-center w-1/2">
                        <div className='flex gap-2 justify-center'>
                            <User />
                            <User />

                        </div>
                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Senior Suite
                        </h2>
                        <PrimaryButton content='More' destination='#' />
                    </div>
                    {/* Images — scrolls normally */}
                    <div className="flex-1 flex flex-col gap-4 max-w-1/2">
                        <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                            <Image
                                src='/RoomPresentation.png'
                                width={500}
                                height={700}
                                alt="gastro"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Price badge */}
                            <div className="absolute text-center bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 border px-4 py-2">
                                <span className={`${raleway.className} text-[#F5EDD6] font-medium tracking-widest text-md uppercase`}>Price</span>
                                <p className={`${ebGaramond.className} text-[#C9A96E] font-semibold text-xl tracking-wide`}>14 000 DA</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">

                    {/* Images — scrolls normally */}
                    <div className="flex-1 flex flex-col gap-4 max-w-1/2">
                        <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                            <Image
                                src='/RoomPresentation.png'
                                width={500}
                                height={700}
                                alt="gastro"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Price badge */}
                            <div className="absolute text-center bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 border px-4 py-2">
                                <span className={`${raleway.className} text-[#F5EDD6] font-medium tracking-widest text-md uppercase`}>Price</span>
                                <p className={`${ebGaramond.className} text-[#C9A96E] font-semibold text-xl tracking-wide`}>14 000 DA</p>
                            </div>
                        </div>
                    </div>

                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 flex flex-col gap-8 items-center text-center w-1/2">
                        <div className='flex justify-center'>
                            <User />
                        </div>
                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Junior Suite
                        </h2>
                        <PrimaryButton content='More' destination='#' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <HeaderContent title={SecondHeaderContentTitle} />
            </div>
            <Gallery />
        </div>
    )
}

export default page