import { cormorant } from '@/app/font';
import { ArrowDownLeft } from 'lucide-react';

const ContactBtn = () => {
    return (
        <div className='capitalize flex gap-2 items-center cursor-pointer text-gray-500 hover:text-gray-950'
            onClick={() => {
                const el = document.getElementById('contactInformation');
                if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: y - 80, // adjust if you have fixed navbar
                        behavior: 'smooth',
                    });
                }
            }}
        >
            <ArrowDownLeft size={14} />
            <h1 className={`${cormorant.className} text-lg font-bold `}>
                Contact
            </h1>
        </div>
    )
}

export default ContactBtn