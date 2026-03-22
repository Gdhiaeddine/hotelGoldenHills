import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import HotelFeatures from "../components/HotelFeatures";
import Accommodation from "../components/Accommodation";
import WellnessSpa from "../components/WellnessSpa";
import Gastronomy from "../components/Gastronomy";

export default function Home() {
  const title = "Golden Hills"
  const subTitle = "Hotel & SPA"
  const description = "Your favorite place. Make quick booking now."
  const isForm = true
  const type = "home"
  const HeroSectionImage = "/assets/homeHotel.jpg"
  return (
    <div>
      <div>
        <HeroSection title={title} subTitle={subTitle} description={description} isForm={isForm} type={type} HeroSectionImage={HeroSectionImage} />
      </div>
      <AboutUs />
      <HotelFeatures />
      <Accommodation />
      <WellnessSpa />
      <Gastronomy />
    </div >
  );
}