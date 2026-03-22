import React from 'react'
import { raleway } from '../app/font'

const Events = () => {
    return (
        <div className="min-h-screen max-w-11/12 mx-auto flex items-center justify-center">
            <div
                className="relative h-[80vh] w-full"
                style={{
                    backgroundImage: "url('/RoomPresentation.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-4 py-6  ">
                        <div className={`${raleway.className} border p-2 items-center text-center font-medium text-lg flex flex-col`}>
                            <h1>For Companies</h1>
                            <p className="max-w-100 mb-4">
                                Experience formal business meetings with a completely different atmosphere. Beautiful spaces, accommodation and quality food.
                            </p>
                            <div className="w-30 mb-4 border border-gray-600 px-8 py-3 rounded-full text-xl text-gray-600 font-medium cursor-pointer hover:bg-gray-600 hover:text-white transition-colors">
                                More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events