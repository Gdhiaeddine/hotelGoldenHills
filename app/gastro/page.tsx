import HeroSection from '@/components/HeroSection'
import React from 'react'
import { cormorant, ebGaramond, raleway } from '../font'
import Image from 'next/image'
import FooterPages from '@/components/FooterPages'
import PrimaryButton from '@/components/PrimaryButton'
import HeaderContent from '@/components/HeaderContent'

const page = () => {
    const title = "Gastronomy"
    const description = "Our team of chefs prepare meals according to traditional recipes using fresh and seasonal ingredients."
    const HeroSectionImage = '/assets/gastro/gastro2.jpg'
    return (
        <div>
            <HeroSection title={title} description={description} HeroSectionImage={HeroSectionImage} isButton={true} buttonContent='Explore' buttonDestination='#gastro' />
            <div id='gastro'>
                <div className='min-h-[50vh] flex items-center justify-center'>
                    <HeaderContent subtitle='gastronomic experience' title='Good food is an inseparable part of perfect relaxation and therefore our team of chefs prepare meals according to traditional recipes using fresh, seasonal ingredients from local producers.' />
                </div>
                <div className='h-screen flex items-center justify-center max-w-11/12 xl:max-w-3/5 mx-auto'>
                    <div
                        className="relative h-[80vh] w-full"
                    >
                        <Image
                            src={HeroSectionImage}
                            fill
                            alt='Restaurant Gastro'
                            className='object-cover'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-center justify-center'>
                    <h1 className={`${cormorant.className} font-semibold max-w-11/12 xl:max-w-1/2 text-4xl`}>
                        An integral part of relax and perfect experience of your stay is exceptional gastronomy. Chefs’ team under my leadership prepares daily delicious meals from domestic and international cuisine with love for you.
                    </h1>
                    <p className={`${cormorant.className} font-semibold max-w-11/12 xl:max-w-1/2 text-2xl`}>
                        Quality of the food in our hotel starts with buying of quality ingredients and therefore is our cuisine focused on regional producers, growers and farmers. Do not expect to be served in 10 minutes, because I lay emphasis particular on preparation, strict adherence to recipes and preservation of traditional practices that have already disappeared from the restaurant. For busy guests we offer daily menu, dinner is served in a rich buffet style. I am looking forward to welcoming you in our hotel restaurant and in Restaurant & Wine Bar. ”
                    </p>
                </div>
                <div className='min-h-screen'>
                    <div className='min-h-[50vh] flex items-center justify-center'>
                        <HeaderContent subtitle='Restaurant' title='An exceptional gastronomic experience' />
                    </div>
                    <div className='h-screen flex items-center justify-center max-w-11/12 xl:max-w-3/5 mx-auto'>
                        <div
                            className="relative h-[80vh] w-full"
                        >
                            <Image
                                src={HeroSectionImage}
                                fill
                                alt='Restaurant Gastro'
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-col items-center">
                    <h1 className={`${ebGaramond.className} text-3xl xl:text-6xl mt-4 text-center px-12`}>
                        Exceptional gastronomy in beautiful spaces
                    </h1>
                    <div className="w-full xl:max-w-3/5 flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 px-12 pt-16 pb-4 mx-auto">

                        {/* Images — scrolls normally */}
                        <div className="flex xl:flex-1 flex-col gap-4">
                            <div className="w-full relative aspect-4/5">
                                <Image
                                    src="/assets/gastro/gastro.jpg"
                                    fill
                                    alt="gastro"
                                    className="object-cover"
                                    quality={100}
                                    priority
                                />
                            </div>
                            <Image
                                src='/assets/gastro/gastro3.jpg'
                                width={500}
                                height={600}
                                alt="gastro"
                                className="w-full object-cover"
                                style={{ aspectRatio: '4/5' }}
                            />
                        </div>

                        {/* Items list — sticks while images scroll */}
                        <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center items-center text-center">

                            <div className="py-7 border-b border-[#2e2a24] max-w-11/12 xl:max-w-2/3">

                                <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                                    Beautiful spaces
                                </h2>
                                <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                                    National and global culinary delights form the basis not only for the A’la Carte menu, but also for the rich selection of our evening buffets.
                                </p>
                            </div>

                            <div className="py-7 max-w-11/12 xl:max-w-2/3">

                                <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                                    Varied menu
                                </h2>
                                <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                                    Come and taste meals from national and international cuisines that are prepared by our chef from fresh, seasonal ingredients from local producers, growers and breeders.
                                </p>
                            </div>
                            <PrimaryButton content='Gastronomy' destination='/gastro/restaurant' />

                        </div>
                    </div>
                </div>
                {/* ============== */}
                <div className='min-h-screen'>
                    <div className='min-h-[50vh] flex items-center justify-center'>
                        <HeaderContent subtitle='Cafeteria' title='Stylish Lobby bar with a pleasant atmosphere' />
                    </div>
                    <div className='h-screen flex items-center justify-center max-w-11/12 xl:max-w-3/5 mx-auto'>
                        <div
                            className="relative h-[80vh] w-full"
                        >
                            <Image
                                src='/assets/gastro/cafeteria2.jpg'
                                alt='Cafeteria'
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-col items-center">
                    <h1 className={`${ebGaramond.className} text-3xl xl:text-6xl mt-4 text-center px-12`}>
                        Exceptional gastronomy in beautiful spaces
                    </h1>
                    <div className="w-full max-w-11/12 xl:max-w-3/5 xl:flex xl:flex-row justify-between items-start gap-12 px-12 pt-16 pb-4 mx-auto">

                        {/* Items list — sticks while images scroll */}
                        <div className="flex-1 xl:sticky xl:top-0 xl:h-screen flex flex-col justify-center items-center text-center">
                            <div className="py-7 max-w-11/12 xl:max-w-2/3">
                                <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                                    Good choice for evening sitting
                                </h2>
                                <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                                    Come and relax in our lobby bar, where we prepare for you delicious coffee of highest quality, tasty drinks and in addition, we have a daily delicious cakes baked only for you.
                                </p>
                            </div>
                            <PrimaryButton content='More' destination='/gastro/cafeteria' />
                        </div>
                        {/* Images — scrolls normally */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="w-full relative" style={{ aspectRatio: '4/5' }}>
                                <Image
                                    src="/assets/gastro/cafeteria2.jpg"
                                    alt="gastro"
                                    fill
                                    className="object-cover"
                                    quality={100}
                                    priority
                                />
                            </div>

                            <div className="w-full relative" style={{ aspectRatio: '4/5' }}>
                                <Image
                                    src="/assets/gastro/cafeteria1.jpg"
                                    alt="gastro"
                                    fill
                                    className="object-cover"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    //////////////
                }
                {/*}
                <div className='min-h-screen'>
                    <div className='h-[70vh] flex flex-col gap-6 items-center justify-center text-center'>
                        <h2 className={`${raleway.className} uppercase font-semibold`}>
                            Cafeteria
                        </h2>
                        <h1 className={`${cormorant.className} font-semibold max-w-2/3 text-8xl`}>
                            Stylish Lobby bar with a pleasant atmosphere
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
                </div>
                <div className="min-h-screen flex flex-col items-center">
                    <h1 className={`${ebGaramond.className} text-6xl mt-4 text-center px-12`}>
                        Exceptional gastronomy in beautiful spaces
                    </h1>
                    <div className="w-full max-w-3/5 flex justify-between items-start gap-12 px-12 pt-16 pb-4 mx-auto">
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
                            <Image
                                src='/RoomPresentation.png'
                                width={500}
                                height={600}
                                alt="gastro"
                                className="w-full object-cover"
                                style={{ aspectRatio: '4/5' }}
                            />
                        </div>
                        <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center items-center text-center">
                            <div className="py-7 max-w-2/3">

                                <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                                    Good choice for evening sitting
                                </h2>
                                <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                                    Come and relax in our lobby bar, where we prepare for you delicious coffee of highest quality, tasty drinks and in addition, we have a daily delicious cakes baked only for you.
                                </p>
                            </div>
                            <div className="mb-4 border border-gray-600 px-8 py-1.5 rounded-full text-lg text-gray-600 font-medium cursor-pointer hover:bg-gray-600 hover:text-white transition-colors">
                                More
                            </div>
                        </div>

                    </div>
                </div>
                {*/}

            </div>
            <FooterPages subtitle='Next' title='About hotel Golden Hills' imageSrc='/assets/homeHotel.jpg' ButtonDestination='Hotel' />
        </div>
    )
}

export default page