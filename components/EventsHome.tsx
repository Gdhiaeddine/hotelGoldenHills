import { cormorant, raleway } from '@/app/font'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

const EventsHome = () => {
    const eventTitle = 'For companies'
    const eventDescription = 'Experience formal business meetings with a completely different atmosphere. Beautiful spaces, accommodation and quality food.'
    const eventImage = '/assets/events/meetingRoom.jpg'


    return (
        <div className="min-h-screen max-w-11/12 mx-auto flex items-center justify-center">
            <div className="relative h-[80vh] w-full overflow-hidden">

                {/* Current image */}
                <div
                    className="absolute inset-0"
                >
                    <Image
                        src={eventImage}
                        alt={eventTitle}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white p-4">
                        <div className={`${raleway.className} border px-4 py-8 text-center font-medium text-lg max-w-lg flex flex-col gap-4`}>
                            <h1 className={`${cormorant.className} text-3xl font-semibold`}>{eventTitle}</h1>
                            <p>
                                {eventDescription}
                            </p>
                            <div className='w-max mx-auto'>
                                <PrimaryButton content='More' destination='#' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsHome