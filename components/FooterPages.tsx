'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cormorant, raleway } from '@/app/font'
import SecondaryButton from './SecondaryButton'

gsap.registerPlugin(ScrollTrigger)

const FooterPages = ({ subtitle, title, imageSrc, ButtonDestination }: { subtitle: string, title: string, imageSrc?: string, ButtonDestination?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image parallax — moves slower than scroll
            gsap.fromTo(
                imageRef.current,
                { y: '-20%' },
                {
                    y: '20%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            )

            // Content fade + slide
            gsap.fromTo(
                contentRef.current,
                { y: -40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play reverse play reverse',
                    },
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className='relative h-[60vh] text-white flex flex-col justify-center items-center overflow-hidden'>
            <Image
                ref={imageRef}
                src={imageSrc ?? "/assets/suites/SuiteSenior.jpg"}
                alt="Suite Royal"
                fill
                className='object-cover scale-125'
                priority
            />
            <div className="absolute inset-0 bg-black/50" />

            <div ref={contentRef} className="relative z-10 flex flex-col gap-10 justify-center items-center text-center px-4">
                <h2 className={`${raleway.className} uppercase font-semibold`}>
                    {subtitle}
                </h2>
                <h1 className={`${cormorant.className} font-semibold text-5xl max-w-[80vh]`}>
                    {title}
                </h1>
                <SecondaryButton content='More' destination={ButtonDestination ?? '#'} />
            </div>
        </div>
    )
}

export default FooterPages