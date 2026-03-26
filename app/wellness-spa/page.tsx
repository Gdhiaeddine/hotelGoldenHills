import HeroSection from '@/components/HeroSection'
import { cormorant, ebGaramond, raleway } from '../font'
import Image from 'next/image'
import HeaderContent from '@/components/HeaderContent'
import BookingInformation from '@/components/BookingInformation'
import FooterPages from '@/components/FooterPages'

const page = () => {
    const title = "Wellness & SPA"
    const description = "Extensive wellness. Thermal spring. Team of therapists."
    const HeroSectionImage = '/assets/spa/jacuzziWide.JPG'
    return (
        <div>
            <HeroSection title={title} description={description} HeroSectionImage={HeroSectionImage} />
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
                    >
                        <Image
                            src='/assets/spa/jacuzziFull.JPG'
                            alt="Jacuzzi"
                            fill
                            className="object-cover object-center"
                        />
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
                    >
                        <Image
                            src='/assets/spa/jacuzzi.JPG'
                            alt="Jacuzzi"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">

                    {/* Images — scrolls normally */}
                    <div className="lg:flex-1 w-full flex flex-col gap-4">
                        <div className="relative w-full aspect-4/5">
                            <Image
                                src='/assets/spa/jacuzziSide.JPG'
                                fill
                                alt="Jacuzzi"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 flex justify-center items-center text-center w-1/2">
                        <div className="py-7 ">
                            <p
                                className={`${raleway.className} text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify`}
                            >
                                Come and unwind in our Golden Hills Jacuzzi, where warm soothing water and a relaxing atmosphere help you release stress and restore your energy. Designed for your comfort and well-being, it offers a perfect moment of relaxation. Our priority is your comfort and complete relaxation, ensured by our professional team.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-[40vh] flex flex-col gap-6 items-center justify-center text-center'>
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
                    >
                        <Image
                            src='/assets/spa/saunaFull.JPG'
                            alt="Sauna"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">


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
                            <p
                                className={`${raleway.className} text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify`}
                            >
                                Step into our Golden Hills Sauna and enjoy the soothing heat that relaxes your body and calms your mind. The gentle warmth helps relieve stress and improve circulation. Our priority is your well-being and total relaxation, guided by our professional team.
                            </p>
                        </div>
                    </div>
                    {/* Images — scrolls normally */}
                    <div className="lg:flex-1 w-full flex flex-col gap-4">
                        <div className="relative w-full aspect-4/5">
                            <Image
                                src='/assets/spa/saunaSide.JPG'
                                fill
                                alt="Sauna Hotel Golden Hills"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
                <div className='h-[40vh] flex flex-col gap-6 items-center justify-center text-center'>
                    <h2 className={`${raleway.className} uppercase font-semibold`}>
                        Hammam Turk
                    </h2>
                    <h1 className={`${cormorant.className} font-semibold max-w-2/4 text-7xl`}>
                        Traditional Turkish Hammam Experience
                    </h1>
                </div>
                <div className='h-screen flex items-center justify-center max-w-3/5 mx-auto'>
                    <div
                        className="relative h-[80vh] w-full"
                    >
                        <Image
                            src='/assets/spa/hammamTurk.JPG'
                            alt="Hammam Turk Hotel Golden Hills"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">

                    {/* Images — scrolls normally */}
                    <div className="lg:flex-1 w-full flex flex-col gap-4">
                        <div className="relative w-full aspect-4/5">
                            <Image
                                src='/assets/spa/hammamTurkSide.JPG'
                                fill
                                alt="Hammam Turk Hotel Golden Hills"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* Items list — sticks while images scroll */}
                    <div className="flex-1 flex justify-center items-center text-center w-1/2">
                        <div className="py-7 ">
                            <p
                                className={`${raleway.className} text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify`}
                            >
                                Discover the traditional Turkish Hammam at Golden Hills, where warm steam and gentle rituals cleanse your body and relax your mind. This authentic experience helps purify the skin and release tension. Our priority is your well-being and deep relaxation, ensured by our professional team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <BookingInformation />
            <FooterPages subtitle='Next' title='Gastronomy in hotel Golden Hills' />
        </div>

    )
}
export default page