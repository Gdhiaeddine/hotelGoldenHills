'use client'
import HeroSection from '@/components/HeroSection'
import RoomType from '@/components/accommodation/RoomType'
import RoomTrigger from '@/components/accommodation/RoomTrigger'
import FooterPages from '@/components/FooterPages'

const page = () => {


    const title = "Rooms"
    const description = "Comfortable accommodation directly in the hotel with extensive Wellness and exceptional gastronomy."
    const HeroSectionImage = "/assets/suites/SuiteSenior.jpg"
    const isButton = true
    const buttonContent = 'Offer'
    const buttonDestination = '#rooms'


    return (
        <div>
            <HeroSection title={title} description={description} HeroSectionImage={HeroSectionImage} isButton={isButton} buttonContent={buttonContent} buttonDestination={buttonDestination}/>
            <RoomType />
            <RoomTrigger />
            <FooterPages subtitle='Wellness & Spa' title='Extensive wellness. Thermal spring. Team of therapists.' imageSrc='/assets/spa/jacuzzi.JPG' ButtonDestination='/wellness-spa'/>

        </div>
    )
}

export default page