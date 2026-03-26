'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cormorant, ebGaramond, raleway } from '@/app/font'

gsap.registerPlugin(ScrollTrigger)

const HeaderContent = ({ subtitle, title, description }: { subtitle?: string, title?: string, description?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current?.children ?? [],
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
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
        <div ref={containerRef} className='h-[40vh] flex flex-col gap-6 items-center justify-center text-center lg:max-w-2/3'>
            {subtitle && (
                <h2 style={{ opacity: 0 }} className={`${raleway.className} uppercase font-semibold`}>
                    {subtitle}
                </h2>
            )}
            {title && (
                <h1 style={{ opacity: 0 }} className={`${cormorant.className} font-semibold text-5xl`}>
                    {title}
                </h1>
            )}
            {description && (
                <p style={{ opacity: 0 }} className={`${ebGaramond.className} font-medium max-w-1/4`}>
                    {description}
                </p>
            )}
        </div>
    )
}

export default HeaderContent