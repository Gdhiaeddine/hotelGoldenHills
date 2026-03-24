import Image from 'next/image'
import { cormorant, raleway } from '@/app/font'
import SecondaryButton from './SecondaryButton'

const FooterPages = ({ subtitle, title }: { subtitle: string, title: string }) => {
    return (
        <div className='relative h-[60vh] text-white flex flex-col justify-center items-center'>
            <Image
                src="/assets/suites/SuiteSenior.jpg"
                alt="Suite Royal"
                fill
                className='object-cover'
                priority
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col gap-10 justify-center items-center text-center px-4">
                <h2 className={`${raleway.className} uppercase font-semibold`}>
                    {subtitle}
                </h2>
                <h1 className={`${cormorant.className} font-semibold text-5xl max-w-[80vh]`}>
                    {title}
                </h1>
                <SecondaryButton content='More' destination='/#' />
            </div>
        </div>

    )
}

export default FooterPages