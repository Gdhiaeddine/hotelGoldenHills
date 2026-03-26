import Image from 'next/image'
import { ebGaramond, raleway } from '../app/font'
import Link from 'next/link'

const WellnessSpa = () => {
    return (
        <div className="min-h-screen flex flex-col relative mb-10 lg:flex-row">

            {/* Panel 1 */}
            <div className="relative h-screen w-full">
                <Image
                    src="/assets/spa/sauna.JPG"
                    alt="Sauna"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className={`${ebGaramond.className} font-medium text-7xl text-white`}>
                        Sauna
                    </h1>
                </div>
            </div>

            {/* Panel 2 */}
            <div
                className="relative h-screen w-full"
            >
                <Image
                    src="/assets/spa/jacuzzi.JPG"
                    alt="Jacuzzi"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className={`${ebGaramond.className} font-medium text-7xl text-white`}>
                        Jacuzzi
                    </h1>
                </div>
            </div>

            {/* Panel 3 */}
            <div
                className="relative h-screen w-full"
            >
                <Image
                    src="/assets/spa/hammamTurk.JPG"
                    alt="Jacuzzi"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className={`${ebGaramond.className} font-medium text-7xl text-white`}>
                        Hammam Turk
                    </h1>
                </div>
            </div>

            {/* Button — centered at bottom, overlapping the images */}
            <Link href='/wellness-spa'>
                <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 border border-gray-400 px-8 py-3 rounded-full text-sm text-white font-semibold cursor-pointer hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap z-10 ${raleway.className}`}>
                    Wellness & Spa
                </div>
            </Link>

        </div>
    )
}

export default WellnessSpa