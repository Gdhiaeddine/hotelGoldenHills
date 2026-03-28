import RoomTypeCard from './RoomTypeCard'
import HeaderContent from '../HeaderContent'

const RoomType = () => {
    return (
        <div id='rooms' className='min-h-screen flex flex-col items-center justify-center gap-14 max-w-3/5 mx-auto mt-24'>

            <div className='flex justify-center items-center'>
                <HeaderContent subtitle='Choose' title='Do you prefer accommodation directly in a hotel, with all the services and comforts that belong to it? We offer comfortably furnished rooms and modern suits.' isLong={true}/>
            </div>

            <RoomTypeCard imagePath='/assets/rooms/RoomPresentation.jpg' imageAlt='room' AccommodationType='Rooms' AccommodationDescription='Comfortably furnished smaller accommodation.' BtnContent='Choose' BtnPath='accommodation/rooms' />
            <RoomTypeCard imagePath='/assets/suites/SuitePresentation.jpg' imageAlt='Suites' AccommodationType='Suites' AccommodationDescription='Spacious accommodation with stylish furnishings.' BtnContent='Choose' BtnPath='accommodation/suites' />

        </div>
    )
}

export default RoomType