import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    const images = [
        {
            name: 'aaa',
            path: '/RoomPresentation.png'
        },
        {
            name: 'aaa',
            path: '/RoomPresentation.png'
        },
        {
            name: 'aaa',
            path: '/RoomPresentation.png'
        },
        {
            name: 'aaa',
            path: '/RoomPresentation.png'
        },
        {
            name: 'aaa',
            path: '/RoomPresentation.png'
        },
        {
            name: 'aaa',
            path: '/RoomPresentation.png'
        },
    ]
    return (
        <div className='min-h-screen grid grid-cols-2 gap-4 max-w-3/5 mx-auto justify-center mb-8'>
            {
                images.map((image, index) => (
                    <div className="h-80" key={index}>
                        <Image
                            src={image.path}
                            alt={image.name}
                            width={500}
                            height={300}
                            className='w-full h-full object-cover'
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery