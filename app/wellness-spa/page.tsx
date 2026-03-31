import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import HeaderContent from '@/components/HeaderContent'
import BookingInformation from '@/components/BookingInformation'
import FooterPages from '@/components/FooterPages'
import SpaIntro from '@/components/spa/SpaIntro'
import SpaSubtitle from '@/components/spa/SpaSubtitle'
import { cormorant } from '../font'

const page = () => {
    return (
        <div>
            <HeroSection
                title="Wellness & SPA"
                description="Extensive wellness. Thermal spring. Team of therapists."
                HeroSectionImage='/assets/spa/jacuzziWide.JPG'
            />
            <div className='min-h-screen'>

                <SpaIntro />

                <div className="h-screen mx-auto flex items-center justify-center">
                    <div className="relative h-full w-full">
                        <Image src='/assets/spa/jacuzziFull.JPG' alt="Jacuzzi" fill className="object-cover object-center" />
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
                    <div className="relative h-[80vh] w-full">
                        <Image src='/assets/spa/jacuzzi.JPG' alt="Jacuzzi" fill className="object-cover object-center" />
                    </div>
                </div>

                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">
                    <div className="lg:flex-1 w-full flex flex-col gap-4">
                        <div className="relative w-full aspect-4/5">
                            <Image src='/assets/spa/jacuzziSide.JPG' fill alt="Jacuzzi" className="object-cover object-center" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center text-center w-1/2">
                        <p className="text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify">
                            Come and unwind in our Golden Hills Jacuzzi, where warm soothing water and a relaxing atmosphere help you release stress and restore your energy. Designed for your comfort and well-being, it offers a perfect moment of relaxation. Our priority is your comfort and complete relaxation, ensured by our professional team.
                        </p>
                    </div>
                </div>

                <SpaSubtitle subtitle='SPA' title='Enter the sauna world in our Wellness & Spa' />

                <div className='h-screen flex items-center justify-center max-w-3/5 mx-auto'>
                    <div className="relative h-[80vh] w-full">
                        <Image src='/assets/spa/saunaFull.JPG' alt="Sauna" fill className="object-cover object-center" />
                    </div>
                </div>

                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">
                    <div className="flex-1 flex justify-center items-center text-center w-1/2">
                        <p className="text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify">
                            Step into our Golden Hills Sauna and enjoy the soothing heat that relaxes your body and calms your mind. The gentle warmth helps relieve stress and improve circulation. Our priority is your well-being and total relaxation, guided by our professional team.
                        </p>
                    </div>
                    <div className="lg:flex-1 w-full flex flex-col gap-4">
                        <div className="relative w-full aspect-4/5">
                            <Image src='/assets/spa/saunaSide.JPG' fill alt="Sauna Hotel Golden Hills" className="object-cover object-center" />
                        </div>
                    </div>
                </div>

                <SpaSubtitle subtitle='Hammam Turk' title='Traditional Turkish Hammam Experience' />

                <div className='h-screen flex items-center justify-center max-w-3/5 mx-auto'>
                    <div className="relative h-[80vh] w-full">
                        <Image src='/assets/spa/hammamTurk.JPG' alt="Hammam Turk Hotel Golden Hills" fill className="object-cover object-center" />
                    </div>
                </div>

                <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">
                    <div className="lg:flex-1 w-full flex flex-col gap-4">
                        <div className="relative w-full aspect-4/5">
                            <Image src='/assets/spa/hammamTurkSide.JPG' fill alt="Hammam Turk Hotel Golden Hills" className="object-cover object-center" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center text-center w-1/2">
                        <p className="text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify">
                            Discover the traditional Turkish Hammam at Golden Hills, where warm steam and gentle rituals cleanse your body and relax your mind. This authentic experience helps purify the skin and release tension. Our priority is your well-being and deep relaxation, ensured by our professional team.
                        </p>
                    </div>
                </div>

            </div>
            <BookingInformation />
            <FooterPages subtitle='Next' title='Gastronomy in hotel Golden Hills' ButtonDestination='/gastro'/>
        </div>
    )
}

export default page