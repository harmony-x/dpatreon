import HowtoCard from "$components/LandingPage/HowtoCard/HowtoCard";
import SectionHeading from "$components/LandingPage/SectionHeading/SectionHeading";
import { howtoData } from "$utils/data";
import { FC } from "react";

const LandingPageHowTo : FC = () => {
  return (
    <section className="mt-12 md:mt-20 lg:mt-32 xl:mt-48">
      <SectionHeading text="How to create on Patreon3" className="text-center mb-6 md:mb-10 lg:mb-14" />
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {howtoData.map(({Icon, description, heading, title}, index) => (
          <HowtoCard Icon={Icon} description={description} heading={heading} title={title} key={index} />
        ))}
      </div>
    </section>
  )
}

export default LandingPageHowTo;