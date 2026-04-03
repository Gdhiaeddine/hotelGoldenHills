import { cormorant, raleway } from '@/app/font'
import { Calendar, Clock, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BookingInformation = () => {
    return (
        <div id='contactInformation' className='min-h-[70vh] flex justify-center items-center'>
            <div className='w-11/12 xl:w-3/6 border p-2 xl:p-8'>
                <div className="header mb-4 flex flex-col :flex-row justify-between items-center">
                    <div>
                        <h1
                            className={`${cormorant.className} font-semibold text-4xl`}
                        >Accommodation booking and information</h1>
                    </div>
                    <p
                        className={`${raleway.className} uppercase font-semibold`}
                    >
                        Contacts for booking and information
                    </p>
                </div>
                <div className='bg-gray-100 p-4'>
                    <div className="subHeader mb-4 flex flex-col md:flex-row justify-between items-center md:max-w-6/7 mx-auto">
                        <div className='flex gap-4 items-center'>
                            <Clock size={20} />
                            <h1
                                className={`${cormorant.className} font-semibold text-xl`}
                            >
                                All Days
                            </h1>
                        </div>
                        <div>
                            <h1
                                className={`${cormorant.className} font-semibold text-xl`}
                            >24 H</h1>
                        </div>
                    </div>
                    <div className='bg-white p-4 flex flex-col gap-4'>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                                <div className='flex flex-col md:flex-row  items-center gap-2 xl:gap-8'>
                                    <Phone size={20} />
                                    <div className='flex flex-col md:flex-row items-center gap-2 xl:gap-8'>
                                        <h1
                                            className={`${cormorant.className} font-medium text-3xl w-20`}
                                        >
                                            Mobile
                                        </h1>
                                        <p
                                            className={`${raleway.className}`}
                                        >
                                            +213 770 51 53 59
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={`${raleway.className} w-max mb-4 border border-gray-600 px-8 py-1.5 rounded-full text-lg text-gray-600 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-colors`}>
                                        Call
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                                    <Phone size={20} />
                                    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                                        <h1
                                            className={`${cormorant.className} font-medium text-3xl w-20`}
                                        >
                                            Phone
                                        </h1>
                                        <p
                                            className={`${raleway.className}`}
                                        >
                                            +213 30 79 30 30
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={`${raleway.className} w-max mb-4 border border-gray-600 px-8 py-1.5 rounded-full text-lg text-gray-600 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-colors`}>
                                        Call
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                                    <Mail size={20} />
                                    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                                        <h1
                                            className={`${cormorant.className} font-medium text-3xl w-20`}
                                        >
                                            Email
                                        </h1>
                                        <p
                                            className={`${raleway.className}`}
                                        >
                                            reservationgoldenhills@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={`${raleway.className} w-max mb-4 border border-gray-600 px-8 py-1.5 rounded-full text-lg text-gray-600 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-colors`}>
                                        Write
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between gap-2 items-center'>
                                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                                    <Calendar size={20} />
                                    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                                        <h1
                                            className={`${cormorant.className} font-medium text-3xl`}
                                        >
                                            Online Booking
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <Link href='/booking'>
                                        <div className={`${raleway.className} w-max mb-4 border border-gray-600 px-8 py-1.5 rounded-full text-lg text-gray-600 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-colors`}>
                                            Book
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingInformation