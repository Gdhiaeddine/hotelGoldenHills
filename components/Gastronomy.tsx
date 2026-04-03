import { ebGaramond, raleway } from '../app/font'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import { Coffee, CookingPot, Utensils } from 'lucide-react'

const Gastronomy = () => {
    const gastronomy = [
        {
            icon: <Utensils />,
            title: 'Restaurant (Gastronomic & Italian)',
            description: 'A refined restaurant offering gourmet and authentic Italian cuisine in an elegant setting.',
        },
        {
            icon: <Coffee />,
            title: 'Cafeteria',
            description: 'A cozy cafeteria serving drinks, snacks, and fresh pastries in a relaxed atmosphere.',
        },
        {
            icon: <CookingPot />,
            title: 'Breakfast & Events Room',
            description: 'A bright space for breakfast buffets and private events with a welcoming ambiance.',
        },
    ]

    const images = [
        {
            path: '/assets/gastro/gastro2.jpg',
            alt: 'Restaurant',
        },
        {
            path: '/assets/gastro/cafeteria2.jpg',
            alt: 'Cafeteria',
        },
    ]
    return (
        <div className="min-h-screen flex flex-col gap-10 mb-10 items-center">
            <h1 className={`${ebGaramond.className} text-6xl mt-4 text-center px-12`}>
                Exceptional gastronomy in beautiful spaces
            </h1>
            <div className="w-full lg:max-w-3/5 flex flex-col justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto lg:flex-row lg:items-start">

                {/* Images — scrolls normally */}
                <div className="flex-1 flex flex-col gap-4">
                    {images.map((image, index) => (
                        <div className="relative w-full" style={{ aspectRatio: '4/5' }}
                                    key={index}>
                            <Image
                                src={image.path}
                                fill
                                alt={image.alt}
                                className="w-full object-cover"
                            />
                        </div>
                    ))
                    }
                </div>

                {/* Items list — sticks while images scroll */}
                <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center text-center">
                    {gastronomy.map((gastro, index) => (
                        <div key={index} className="py-7 border-b border-[#2e2a24] flex flex-col gap-4 items-center ">
                            <div>
                                {gastro.icon}
                            </div>
                            <h2 className={`${ebGaramond.className} text-xl font-medium text-stone-900 tracking-wide`}>
                                {gastro.title}
                            </h2>
                            <p className={`${raleway.className} text-sm text-[#8a8278] tracking-wider leading-relaxed`}>
                                {gastro.description}
                            </p>
                        </div>
                    ))
                    }


                </div>

            </div>
            <PrimaryButton content='Gastronomy' destination='/gastro' />
        </div>
    )
}

export default Gastronomy