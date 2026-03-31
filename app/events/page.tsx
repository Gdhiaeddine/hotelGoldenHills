import HeaderContent from "@/components/HeaderContent"
import HeroSection from "@/components/HeroSection"
import Image from "next/image"
import { cormorant, raleway } from "../font"
import BookingInformation from "@/components/BookingInformation"
import ContactForm from "@/components/contact/ContactForm"
import FooterPages from "@/components/FooterPages"

const page = () => {
    const title = 'Where work and relax come together'
    const description = 'Hotel & Spa Golden Hills offer well-equipped conference rooms, professional staff, beautiful hotel environment and wonderful Wellness & Spa.'
    const HeroSectionImage = "/assets/events/meetingRoom.jpg"
    const headerContentTitle = "Success of business meetings, trainings and conferences is a result of hard work and right decisions. One of them is a choice of a responsible hotel partner which is at the end of the day reflected in the overall rating of event, satisfaction of your clients, partners and colleagues."

    return (
        <div>
            <HeroSection title={title} description={description} HeroSectionImage={HeroSectionImage} />
            <div className='h-[80vh] flex justify-center items-center'>
                <HeaderContent title={headerContentTitle} />
            </div>
            <div className="h-screen mx-auto flex items-center justify-center">
                <div
                    className="relative h-full w-full"
                >
                    <Image
                        src='/assets/events/meetingRoom2.jpg'
                        alt="Meeting Room"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <div className='flex justify-center'>
                <HeaderContent subtitle='conferences' title='The right space for conferences and congresses' />
            </div>
            <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">

                {/* Images — scrolls normally */}
                <div className="lg:flex-1 w-full flex flex-col gap-4">
                    <div className="relative w-full aspect-4/5">
                        <Image
                            src='/assets/events/meetingRoom2.jpg'
                            alt="Meeting Room"
                            fill
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
                            Hotel & Spa Resort Golden Hills is the right place where work and relax come together! Hotel & Spa Golden Hills offer well-equipped conference rooms, professional staff, beautiful hotel environment and wonderful Wellness & Spa.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <HeaderContent subtitle='Business meetings' title='Combines work with relaxation and relaxing activities' />
            </div>
            <div className="w-full max-w-3/5 flex justify-between items-center gap-12 px-12 pt-16 pb-4 mx-auto">


                {/* Items list — sticks while images scroll */}
                <div className="flex-1 flex justify-center items-center text-center w-1/2">
                    <div className="py-7 ">
                        <p
                            className={`${raleway.className} text-md font-medium max-w-2/3 mx-auto tracking-wider leading-relaxed text-justify`}
                        >
                            When it is the time for business meetings with partners or colleagues, time for meetings, trainings, congresses or presentations, you need to find a space where you will feel comfortable. Our Hotel combines work with relaxation and relaxing activities.
                            <br />
                            <strong>Why should your business appointment take place at the Hotel & Spa Golden hills?</strong>
                        </p>
                    </div>
                </div>
                {/* Images — scrolls normally */}
                <div className="lg:flex-1 w-full flex flex-col gap-4">
                    <div className="relative w-full aspect-4/5">
                        <Image
                            src='/assets/events/meetingRoom.jpg'
                            alt="Meeting Room"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <BookingInformation />
            <ContactForm />
            <FooterPages subtitle='rooms' title='Accommodation options for your guests and business partners in the Golden Hills' ButtonDestination="/accommodation"/>
        </div>
    )
}

export default page