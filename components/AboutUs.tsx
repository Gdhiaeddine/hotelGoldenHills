'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ebGaramond } from '../app/font'
import PrimaryButton from './PrimaryButton'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null)
    const h2Ref = useRef<HTMLHeadingElement>(null)
    const btnRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                [h1Ref.current, h2Ref.current, btnRef.current],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: h1Ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            )
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className={`${ebGaramond.className} text-5xl max-w-11/12 lg:max-w-2/4 text-center mb-8`}>
                <h1 ref={h1Ref} style={{ opacity: 0 }}>
                    The stay at Wellness & Spa Hotel Golden Hills means enjoying every moment.
                </h1>
                <h1 ref={h2Ref} className="text-gray-600" style={{ opacity: 0 }}>
                    Relax. Find inspiration. Be fascinated.
                </h1>
            </div>
            <div ref={btnRef} style={{ opacity: 0 }}>
                <PrimaryButton content='About Hotel' destination='/hotel' />
            </div>
        </div>
    )
}

export default AboutUs