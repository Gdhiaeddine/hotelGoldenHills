'use client'

import Image from 'next/image'
import { raleway } from '../app/font'
import { useCallback, useEffect, useRef, useState } from 'react'

const images = [
    '/RoomPresentation.png',
    '/assets/hotelOutside.jpg',
    '/assets/RoomFloor.webp',
]

const AUTOPLAY_INTERVAL = 4000

const HotelFeatures = () => {
    const hotelFeatures = [
        "Favorite hotel",
        "An oasis of relaxation",
        "An exceptional experience",
        "Varied program",
        "In the heart of Sétif",
    ]

    const [current, setCurrent] = useState(0)
    const [nextIdx, setNextIdx] = useState<number | null>(null)
    const [phase, setPhase] = useState<'idle' | 'prepare' | 'slide'>('idle')
    const busyRef = useRef(false)

    const goNext = useCallback(() => {
        if (busyRef.current) return
        busyRef.current = true

        const next = (current + 1) % images.length
        setNextIdx(next)
        setPhase('prepare')

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setPhase('slide')
            })
        })

        setTimeout(() => {
            setCurrent(next)
            setNextIdx(null)
            setPhase('idle')
            busyRef.current = false
        }, 600)
    }, [current])

    useEffect(() => {
        const timer = setInterval(goNext, AUTOPLAY_INTERVAL)
        return () => clearInterval(timer)
    }, [goNext])

    const isSliding = phase === 'slide'

    const currentX = isSliding ? '-100%' : '0%'
    const nextX = phase === 'prepare' ? '100%' : '0%'

    return (
        <div className="min-h-screen max-w-11/12 mx-auto flex items-center justify-center">
            <div className="relative h-[80vh] w-full overflow-hidden">

                {/* Current image */}
                <div
                    className="absolute inset-0"
                    style={{
                        transform: `translateX(${currentX})`,
                        transition: isSliding ? 'transform 600ms ease-in-out' : 'none',
                    }}
                >
                    <Image
                        src={images[current]}
                        alt={`Room ${current + 1}`}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Next image */}
                {nextIdx !== null && (
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: `translateX(${nextX})`,
                            transition: isSliding ? 'transform 600ms ease-in-out' : 'none',
                        }}
                    >
                        <Image
                            src={images[nextIdx]}
                            alt={`Room ${nextIdx + 1}`}
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white p-4">
                        <div className={`${raleway.className} border px-4 py-8 text-center font-medium text-lg`}>
                            {hotelFeatures.map((feature, index) => (
                                <h1 key={index}>{feature}</h1>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelFeatures