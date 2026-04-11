import { cormorant, raleway } from '@/app/font'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  fromMenu?: boolean
  onClose?: () => void
}

const Footer = ({ fromMenu, onClose }: FooterProps) => {
  const footerImage = "/assets/hotelOutside.jpg"
  const navPages = [
    { name: "Home",        url: "/" },
    { name: "About us",    url: "/hotel" },
    { name: "Rooms",       url: "/accommodation" },
    { name: "Wellness",    url: "/wellness-spa" },
    { name: "Gastronomy",  url: "/gastro" },
    { name: "Events",      url: "/events" },
    { name: "Contact",     url: "/contact" },
  ]

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen w-full">
      {/* Left Panel - Navigation */}
      <div
        className='lg:w-[60%] h-full flex justify-start items-center px-16 relative overflow-hidden'
      >
        <Image
          src={footerImage}
          alt="Navigation background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Nav links */}
        <div className="flex flex-col gap-6 z-10 p-6">
          {navPages.map((item, index) => (
            <Link href={item.url} key={index} onClick={fromMenu ? onClose : undefined}>
              <h1
                className={`${cormorant.className} text-white text-3xl font-bold tracking-widest cursor-pointer hover:text-amber-400 transition-colors duration-300`}
              >
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Panel — masqué depuis le menu */}
        <div className="lg:w-[40%] py-6 lg:h-full h-full bg-[#111] flex flex-col text-center justify-center items-center px-12 gap-10">
          <Image
            src='/assets/logo.png'
            height={200}
            width={200}
            alt="golden Hills"
          />
          <div className={`flex flex-col gap-1 text-stone-200 tracking-wide text-lg ${raleway.className}`}>
            <h2>Rue Champs d'azur</h2>
            <h2>Sétif, Algérie</h2>
          </div>
          <div className={`flex flex-col gap-1 text-stone-200 tracking-wide text-lg ${raleway.className}`}>
            <h2>+213 770 51 53 59</h2>
            <h2>+213 30 79 30 30</h2>
            <h2>reservationgoldenhills@gmail.com</h2>
          </div>
        </div>
    </div>
  )
}

export default Footer