import { ebGaramond } from '../app/font'
import PrimaryButton from './PrimaryButton'

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <div className={`${ebGaramond.className} text-5xl max-w-2/4 text-center mb-8`}>
          <h1>
            The stay at Wellness & Spa Hotel Golden Hills means enjoying every moment.
          </h1>
          <h1 className="text-gray-600">
            Relax. Find inspiration. Be fascinated.
          </h1>
        </div>
        <PrimaryButton content='About Hotel' destination='/hotel'/>
      </div>
  )
}

export default AboutUs