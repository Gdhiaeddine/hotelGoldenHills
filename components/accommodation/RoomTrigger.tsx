'use client'
import { cormorant, raleway } from '@/app/font'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const RoomTrigger = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div
            className="min-h-screen relative flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('/RoomPresentation.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black/30" />

            <div className='w-full max-w-xl z-10 flex flex-col gap-2 px-4'>

                {/* Item 1 */}
                <div className={`transition-all duration-300 ${openIndex === 0 ? 'bg-white text-black' : 'text-white'}`}>
                    <div className='flex justify-between items-center p-4 cursor-pointer' onClick={() => toggle(0)}>
                        <h1 className={`${cormorant.className} text-3xl font-semibold`}>To make your stay tasty</h1>
                        <div className={`border rounded-full p-1 transition-transform duration-300 ${openIndex === 0 ? 'rotate-180 border-black' : 'border-white'}`}>
                            <ChevronDown size={18} />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className={`${raleway.className} px-4 pb-4 text-sm leading-relaxed text-black`}>
                            Rich breakfast buffet at the hotel restaurant from 7am to 10am, holidays and weekends 7:30am to 10:30am.
                            15% discount on catering services with Gold loyalty profile.
                            10% discount on catering services with Silver loyalty profile.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className={`transition-all duration-300 ${openIndex === 1 ? 'bg-white text-black' : 'text-white'}`}>
                    <div className='flex justify-between items-center p-4 cursor-pointer' onClick={() => toggle(1)}>
                        <h1 className={`${cormorant.className} text-3xl font-semibold`}>Wellness & Relaxation</h1>
                        <div className={`border rounded-full p-1 transition-transform duration-300 ${openIndex === 1 ? 'rotate-180 border-black' : 'border-white'}`}>
                            <ChevronDown size={18} />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className={`${raleway.className} px-4 pb-4 text-sm leading-relaxed text-black`}>
                            Enjoy our full spa facilities including sauna, hammam, and heated pool.
                            Exclusive access for hotel guests from 7am to 9pm daily.
                            Book treatments in advance to secure your preferred time slot.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className={`transition-all duration-300 ${openIndex === 2 ? 'bg-white text-black' : 'text-white'}`}>
                    <div className='flex justify-between items-center p-4 cursor-pointer' onClick={() => toggle(2)}>
                        <h1 className={`${cormorant.className} text-3xl font-semibold`}>Concierge Services</h1>
                        <div className={`border rounded-full p-1 transition-transform duration-300 ${openIndex === 2 ? 'rotate-180 border-black' : 'border-white'}`}>
                            <ChevronDown size={18} />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className={`${raleway.className} px-4 pb-4 text-sm leading-relaxed text-black`}>
                            Our concierge team is available 24/7 to assist with reservations, transport, and local recommendations.
                            Private airport transfers available upon request.
                            Complimentary city maps and tour guides provided at check-in.
                        </p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className={`transition-all duration-300 ${openIndex === 3 ? 'bg-white text-black' : 'text-white'}`}>
                    <div className='flex justify-between items-center p-4 cursor-pointer' onClick={() => toggle(3)}>
                        <h1 className={`${cormorant.className} text-3xl font-semibold`}>Room Amenities</h1>
                        <div className={`border rounded-full p-1 transition-transform duration-300 ${openIndex === 3 ? 'rotate-180 border-black' : 'border-white'}`}>
                            <ChevronDown size={18} />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}>
                        <p className={`${raleway.className} px-4 pb-4 text-sm leading-relaxed text-black`}>
                            All rooms feature premium bedding, climate control, and high-speed Wi-Fi.
                            Minibar restocked daily with local products and seasonal beverages.
                            Turndown service available every evening upon request.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoomTrigger