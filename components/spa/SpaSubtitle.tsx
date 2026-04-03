'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cormorant, raleway } from '@/app/font'

gsap.registerPlugin(ScrollTrigger)

const SpaSubtitle = ({ subtitle, title, size = 'text-4xl xl:text-7xl' }: { subtitle: string, title: string, size?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current?.children ?? [],
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: 'power2.out', stagger: 0.2,
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
        <div ref={containerRef} className='min-h-[40vh] flex flex-col gap-6 items-center justify-center text-center'>
            <h2 style={{ opacity: 0 }} className={`${raleway.className} uppercase font-semibold`}>{subtitle}</h2>
            <h1 style={{ opacity: 0 }} className={`${cormorant.className} font-semibold xl:max-w-3/4 ${size}`}>{title}</h1>
        </div>
    )
}

export default SpaSubtitle