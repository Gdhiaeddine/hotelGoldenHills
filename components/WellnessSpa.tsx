import { ebGaramond, raleway } from '../app/font'

const WellnessSpa = () => {
    return (
        <div className="min-h-screen flex relative mb-10">

            {/* Panel 1 */}
            <div
                className="relative h-screen w-full"
                style={{
                    backgroundImage: "url('/RoomPresentation.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
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
                style={{
                    backgroundImage: "url('/RoomPresentation.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
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
                style={{
                    backgroundImage: "url('/RoomPresentation.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className={`${ebGaramond.className} font-medium text-7xl text-white`}>
                        Hammam Turk
                    </h1>
                </div>
            </div>

            {/* Button — centered at bottom, overlapping the images */}
            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 border border-gray-400 px-8 py-3 rounded-full text-sm text-white font-semibold cursor-pointer hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap z-10 ${raleway.className}`}>
                Wellness & Spa
            </div>

        </div>
    )
}

export default WellnessSpa