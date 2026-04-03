import Image from 'next/image'

type ImageType = {
  name?: string;
  alt?: string;
  path: string;
};


const Gallery = ({ images } : { images?: ImageType[] }) => {
    
    return (
        <div className='min-h-screen flex flex-col xl:grid xl:grid-cols-2 gap-4 max-w-11/12 xl:max-w-3/5 mx-auto justify-center mb-8'>
            {images && 
                images.map((image, index) => (
                    <div className="h-80" key={index}>
                        <Image
                            src={image.path}
                            alt={image.name || image.alt || ''}
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