import { raleway } from '@/app/font'
import Link from 'next/link'
import React from 'react'

const PrimaryButton = ({ content, destination }: { content: string, destination: string }) => {
    return (
        <Link href={destination}>
            <div className={`${raleway.className} mb-4 border border-gray-600 px-8 py-3 rounded-full text-sm text-gray-600 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-colors`}>
                {content}
            </div>
        </Link>
    )
}

export default PrimaryButton