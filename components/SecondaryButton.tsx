import { raleway } from '@/app/font'
import Link from 'next/link'

const SecondaryButton = ({ content, destination }: { content: string, destination: string }) => {
    return (
        <Link href={destination}>
            <div className={`${raleway.className} mb-4 border border-white px-8 py-3 rounded-full text-sm text-white font-semibold cursor-pointer hover:bg-white/50 hover:text-gray-600 transition-colors`}>
                {content}
            </div>
        </Link>
    )
}

export default SecondaryButton