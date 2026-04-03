import { cormorant } from '@/app/font'
import Gallery from '@/components/accommodation/Gallery'
import FooterPages from '@/components/FooterPages'
import HeaderContent from '@/components/HeaderContent'
import HeroSection from '@/components/HeroSection'
import { Gastro } from '@/data/gastro'
import Image from 'next/image'

export default function GastroClient({ gastro }: { gastro: Gastro }) {


    return (
        <div>
            <HeroSection title={gastro.name} description={gastro.description} HeroSectionImage={gastro.images[0].path} isButton={true} buttonDestination='#restaurant' />
            <div className='h-screen flex justify-center items-center'>
                <HeaderContent subtitle={gastro.headerContent.subtitle} title={gastro.headerContent.title} />
            </div>
            <div className='h-screen flex items-center justify-center max-w-11/12 xl:max-w-3/5 mx-auto'>
                <div
                    className="relative h-[80vh] w-full"
                >
                    <Image
                        src={gastro.images[0].path}
                        fill
                        alt='Restaurant Gastro'
                        className='object-cover'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <h1 className={`${cormorant.className} font-semibold max-w-11/12 xl:max-w-1/2 text-4xl`}>
                    {gastro.headerContent.paragraphtitle}
                </h1>
                <p className={`${cormorant.className} font-semibold max-w-11/12 xl:max-w-1/2 text-2xl`}>
                    {gastro.headerContent.paragraphDescription}
                </p>
            </div>
            <div className='min-h-screen flex flex-col items-center mb-4'>
                <HeaderContent title='Gallery' />
                <div className="flex flex-col items-center gap-4 w-full">
                    {gastro.images.map((image, index) => (
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
            <FooterPages title='Gastronomy' imageSrc='/assets/gastro/gastro2.jpg' ButtonDestination='/gastro' buttonContent='Back'/>

        </div>
    )
}
