import { cormorant, ebGaramond, raleway } from '@/app/font'
import React from 'react'

const HeaderContent = ({ subtitle, title, description }: { subtitle?: string, title?: string, description?: string }) => {
    return (
        <div className='h-[40vh] flex flex-col gap-6 items-center justify-center text-center max-w-2/3'>
            {
                subtitle &&
                <h2 className={`${raleway.className} uppercase font-semibold`}>
                    {subtitle}
                </h2>
            }
            {
                title &&
                <h1 className={`${cormorant.className} font-semibold text-5xl`}>
                    {title}
                </h1>
            }
            {
                description &&
                <p className={`${ebGaramond.className} font-medium max-w-1/4 `}>
                    {description}
                </p>
            }
        </div>
    )
}

export default HeaderContent