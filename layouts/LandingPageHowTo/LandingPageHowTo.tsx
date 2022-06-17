import HowtoCard from "$components/LandingPage/HowtoCard/HowtoCard";
import SectionHeading from "$components/LandingPage/SectionHeading/SectionHeading";
import { howtoData } from "$utils/data";
import { FC } from "react";

const LandingPageHowTo : FC = () => {
  return (
    <section className="mt-12 md:mt-20 lg:mt-32 xl:mt-48">
    <h2 className={`font-bold not-italic font-Montserrat text-2xl md:text-3xl lg2:text-4xl lg3:text-6xl text-black mt-16 mb-6 md:mb-16 text-center`}>How to <span className='text-primary'>create</span>  on Patreon3</h2>
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {howtoData.map(({Icon, description, heading, title}, index) => (
          <HowtoCard Icon={Icon} description={description} heading={heading} title={title} key={index} />
        ))}
      </div>
    </section>
  )
}

export default LandingPageHowTo;