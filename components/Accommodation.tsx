import { ebGaramond } from '../app/font'
import PrimaryButton from './PrimaryButton'
import Image from 'next/image'

const Accommodation = () => {

    const roomImage = "/assets/rooms/RoomPresentation.jpg"
    const suiteImage = "/assets/suites/SuitePresentation.jpg"


    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 mx-auto max-w-11/12">

            {/* Two panels side by side */}
            <div className="flex flex-col gap-4 w-full lg:flex-row">
                <div className="relative h-[80vh] w-full overflow-hidden">
                    <Image
                        src={roomImage}
                        alt="Rooms"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className={`${ebGaramond.className} font-medium text-7xl text-white`}>
                            Rooms
                        </h1>
                    </div>
                </div>

                <div className="relative h-[80vh] w-full overflow-hidden">
                    <Image
                        src={suiteImage}
                        alt="Suite"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className={`${ebGaramond.className} font-medium text-7xl text-white`}>
                            Suite
                        </h1>
                    </div>
                </div>
            </div>

            <PrimaryButton content='Accommodation' destination='/accommodation' />
        </div>

    )
}

export default Accommodation