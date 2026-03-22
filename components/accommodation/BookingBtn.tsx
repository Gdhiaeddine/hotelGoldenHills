import { raleway } from '@/app/font'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const BookingBtn = () => {
    return (
        <Link href='/booking'>
            <div className='capitalize text-white bg-[#0c0a06]/90 rounded-full px-4 py-2 cursor-pointer'>
                <div className="p-3 flex gap-2 items-center">
                    <h1 className={`${raleway.className} text-sm font-semibold `}>
                        Booking
                    </h1>
                    <ArrowRight size={18} />
                </div>
            </div>
        </Link>
    )
}

export default BookingBtn