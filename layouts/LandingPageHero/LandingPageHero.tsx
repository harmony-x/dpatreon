import Button from "$components/Button/Button";
import SectionHeading from "$components/LandingPage/SectionHeading/SectionHeading";
import SearchBox from "$components/SearchBox/SearchBox";
import LandingPageSearchIcon from "$svg/landing_page-search_icon";
import { FC } from "react";
import { LandingPageHeroProps } from "./LandingPageHero.types";

const LandingPageHero : FC<LandingPageHeroProps> = ({setIsOpen}) => {
  return (
    <section className=" flex flex-col items-stretch">
      <div className="relative py-8 md:py-16 lg2:py-24">
      <div className="landing-page-bg absolute -left-6 md:-left-12 lg:-left-24 top-0 lg3:left-0 w-screen lg3:w-full h-full z-auto" />
      <h1 className="text-center font-bold not-italic font-Montserrat text-4xl md:text-6xl lg2:text-8xl text-white z-10 relative">Platform for <br/> web3 Creators.</h1>
      <p className="font-light text-center text-base md:text-2xl text-white my-4 md:my-6 lg2:my-8 z-10 relative">We built a decentralized version of Patreon catered to <br/> the web3 creator community. </p>
      <div className="flex justify-center z-10 relative">
        <SearchBox SearchIcon={LandingPageSearchIcon} className="w-full md:w-96 pl-20 pr-4" height="h-12 md:h-16" placeholder="Find a creator you love" rightSpacing="mr-6">
          <Button px="px-6 md:px-10" height="h-12 md:h-16" onClick={()=> {}} text="Search" type="secondary"  />
        </SearchBox>
      </div>
      </div>
      <article className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-10 lg:mt-16 xl:mt-24 md:gap-6">
        <SectionHeading text="Earn for curating exclusive web3 contents." />
        <div className="mt-6 md:mt-0">
          <p className="font-medium text-base md:text-lg text-white">On <span className="font-Montserrat font-semibold">Patreon3</span>, you can let your fans become active participants in the work they love by offering them a monthly membership.</p>
          <Button px="px-4 md:px-6" height='h-12 md:h-55px' onClick={() => {setIsOpen(true)}} text='Connect Wallet' type='primary' className="mt-4 md:mt-8"  />
        </div>
      </article>
    </section>
  )
}

export default LandingPageHero;