import { Suspense } from 'react'
import BookingPageContent, { SearchData } from './BookingPageContent'
import HeroSection from '@/components/HeroSection'

export default function page() {
    return (
        <>
            <Suspense fallback={<div>
                <HeroSection title="Booking" isForm={true}  HeroSectionImage="/assets/RoomFloor.webp" />
            </div>}>
                <BookingPageContent />
            </Suspense>
        </>

    )
}