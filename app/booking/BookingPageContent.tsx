'use client'
import HeaderContent from '@/components/HeaderContent'
import HeroSection, { Step1Data } from '@/components/HeroSection'
import { useEffect, useRef, useState } from 'react'
import { raleway } from '../font'
import RoomCard from '@/components/booking/RoomCard'
import { rooms, suites } from '@/data/rooms'
import z from 'zod'
import { useSearchParams } from 'next/navigation'
import SuiteCard from '@/components/booking/SuiteCard'

const formSchema = z.object({
    nbPrsn: z.string(),
    nbRooms: z.string(),
    dateRange: z.object({
        from: z.date(),
        to: z.date(),
    }),
})

export type SearchData = z.infer<typeof formSchema>


const BookingPageContent = () => {
    const title = "Booking"
    const isForm = true
    const HeaderContentTitle = 'Sélectionnez une chambre et un tarif'
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)


    
    const defaultData = {
        nbPrsn: '1',
        nbRooms: '1',
        dateRange: {
            from: today,
            to: tomorrow,
        }
    }
    const [search, setSearch] = useState<SearchData>(defaultData)
    const resultsRef = useRef<HTMLDivElement>(null)
    const searchParams = useSearchParams()




    useEffect(() => {
        const nbPrsn = searchParams.get('nbPrsn')
        const nbRooms = searchParams.get('nbRooms')
        const from = searchParams.get('from')
        const to = searchParams.get('to')

        if (nbPrsn && nbRooms && from && to) {
            setSearch({
                nbPrsn,
                nbRooms,
                dateRange: {
                    from: new Date(from),
                    to: new Date(to),
                },
            })
            // scroll to results after data loads
            setTimeout(() => {
                resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 300)
        }
    }, [searchParams])


    const nights =
        search?.dateRange?.from && search?.dateRange?.to
            ? Math.ceil(
                (search.dateRange.to.getTime() - search.dateRange.from.getTime()) /
                (1000 * 60 * 60 * 24)
            )
            : 1

    const roomCount = parseInt(search?.nbRooms || '1', 10)

    const handleSearch = (data: SearchData) => {
        setSearch(data)
        setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
    }


    const HeroSectionImage = '/assets/RoomFloor.webp'
    return (
        <div>
            <HeroSection title={title} isForm={isForm} onSearch={handleSearch} HeroSectionImage={HeroSectionImage}/>

            <div className='flex justify-center'>
                <HeaderContent title={HeaderContentTitle} />
            </div>
            <div
                ref={resultsRef}
                className={`${raleway.className} flex flex-col items-center gap-4 pb-12`}
            >
                {rooms.map(room => (
                    <RoomCard
                        key={room.name}
                        room={room}
                        nights={nights}
                        rooms={roomCount}
                        data={search}
                    />
                ))}
                {suites.map(room => (
                    <SuiteCard
                        key={room.name}
                        room={room}
                        nights={nights}
                        rooms={roomCount}
                        data={search}
                    />
                ))}
            </div>

        </div>

    )
}

export default BookingPageContent