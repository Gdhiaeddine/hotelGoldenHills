import { ebGaramond } from '../app/font'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

const Gastronomy = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <h1 className={`${ebGaramond.className} text-6xl mt-4 text-center px-12`}>
                Exceptional gastronomy in beautiful spaces
            </h1>
            <div className="w-full max-w-3/5 flex justify-between items-start gap-12 px-12 pt-16 pb-4 mx-auto">

                {/* Images — scrolls normally */}
                <div className="flex-1 flex flex-col gap-4">
                    <Image
                        src='/RoomPresentation.png'
                        width={300}
                        height={400}
                        alt="gastro"
                        className="w-full object-cover"
                        style={{ aspectRatio: '4/5' }}
                    />
                    <Image
                        src='/RoomPresentation.png'
                        width={500}
                        height={600}
                        alt="gastro"
                        className="w-full object-cover"
                        style={{ aspectRatio: '4/5' }}
                    />
                    <Image
                        src='/RoomPresentation.png'
                        width={500}
                        height={600}
                        alt="gastro"
                        className="w-full object-cover"
                        style={{ aspectRatio: '4/5' }}
                    />
                    <Image
                        src='/RoomPresentation.png'
                        width={500}
                        height={600}
                        alt="gastro"
                        className="w-full object-cover"
                        style={{ aspectRatio: '4/5' }}
                    />
                </div>

                {/* Items list — sticks while images scroll */}
                <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center text-center">

                    <div className="py-7 border-b border-[#2e2a24] ">
                        {
                            /*
                            <div className="flex items-center gap-3 mb-3">
                              <span className="block w-7 h-px bg-[#C9A96E]" />
                              <span className="text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase">01</span>
                            </div>
                            */
                        }

                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Restaurant
                        </h2>
                        <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                            National and international cuisines
                        </p>
                    </div>

                    <div className="py-7 border-b border-[#2e2a24]">
                        {/*
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-7 h-px bg-[#C9A96E]" />
                <span className="text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase">02</span>
              </div>
              */}

                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Restaurant
                        </h2>
                        <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                            National and international cuisines
                        </p>
                    </div>

                    <div className="py-7">
                        {
                            /*
                            <div className="flex items-center gap-3 mb-3">
                              <span className="block w-7 h-px bg-[#C9A96E]" />
                              <span className="text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase">03</span>
                            </div>
                            */
                        }

                        <h2 className={`${ebGaramond.className} text-3xl font-normal text-stone-900 mb-2 tracking-wide`}>
                            Restaurant
                        </h2>
                        <p className="text-sm text-[#8a8278] tracking-wider leading-relaxed">
                            National and international cuisines
                        </p>
                    </div>

                </div>

            </div>
            <PrimaryButton content='Gastronomy' destination='/gastro'/>
        </div>
    )
}

export default Gastronomy