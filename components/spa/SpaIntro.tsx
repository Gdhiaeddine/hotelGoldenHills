'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cormorant, ebGaramond, raleway } from '@/app/font'

gsap.registerPlugin(ScrollTrigger)

const SpaIntro = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current?.children ?? [],
                { x: -60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.25,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            )
        })
        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className='h-screen flex flex-col gap-6 items-center justify-center text-center'>
            <h2 style={{ opacity: 0 }} className={`${raleway.className} uppercase font-semibold`}>explore</h2>
            <h1 style={{ opacity: 0 }} className={`${cormorant.className} font-semibold max-w-1/2 text-5xl`}>
                Far from the everyday life, hustle and trouble, we create magical moments of peace and relaxation.
            </h1>
            <p style={{ opacity: 0 }} className={`${ebGaramond.className} font-medium max-w-1/4`}>
                We take care of your body, stimulate your senses and relax your mind. Due to its unique exceptional thermal springs, rich sources of mineral water with beneficial effects on health, especially muscle and joint regeneration, our Wellness & Spa has become synonymous of relaxation and well-being.
            </p>
        </div>
    )
}

export default SpaIntro