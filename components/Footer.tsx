import { cormorant, raleway } from '@/app/font'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const footerImage = "/assets/hotelOutside.jpg"
    const navPages = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About us",
            url: "/hotel",
        },
        {
            name: "Rooms",
            url: "/accommodation",
        },
        {
            name: "Wellness",
            url: "/wellness-spa",
        },
        {
            name: "Gastronomy",
            url: "/gastro",
        },
        {
            name: "Events",
            url: "/events",
        },
        {
            name: "Contact",
            url: "/contact",
        },

    ]
    return (
        <div className="flex h-screen w-full">
            {/* Left Panel - Navigation - 60% */}
            <div
                className={`w-[60%] h-full flex justify-start items-center px-16 relative`}
                style={{
                    backgroundImage: `url(${footerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}

            >
                <div className="absolute inset-0 bg-black/30" />

                <div className='flex flex-col gap-6 z-10'>
                    {navPages.map((item, index) => (
                        <Link href={item.url}  key={index}>
                            <h1
                                className={`${cormorant.className} text-white text-3xl font-bold tracking-widest cursor-pointer hover:text-amber-400 transition-colors duration-300`}
                            >
                                {item.name}
                            </h1>
                        </Link>
                    ))}
                </div>
                <div>

                </div>
            </div>

            {/* Right Panel - Info - 40% */}
            <div className="w-[40%] h-full bg-[#111] flex flex-col text-center justify-center items-center px-12 gap-10">
                <h1 className="text-amber-400 text-4xl font-serif leading-tight">
                    <Image
                        src='/assets/logo.png'
                        height={200}
                        width={200}
                        alt="golden Hills"
                    />
                </h1>

                <div className={`flex flex-col gap-1 text-stone-200 tracking-wide text-lg ${raleway.className}`}>
                    <h2>Rue Champs d'azur</h2>
                    <h2>Sétif, Algérie</h2>
                </div>

                <div className={`flex flex-col gap-1 text-stone-200 tracking-wide text-lg ${raleway.className}`}>
                    <h2>+213 77 77 77 77 77</h2>
                    <h2>+213 77 77 77 77 77</h2>
                    <h2>reservationgoldenhills@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer