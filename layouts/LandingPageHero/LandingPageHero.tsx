import Button from "$components/Button/Button";
import SectionHeading from "$components/LandingPage/SectionHeading/SectionHeading";
import SearchBox from "$components/SearchBox/SearchBox";
import LandingPageSearchIcon from "$svg/landing_page-search_icon";
import { FC } from "react";
import { LandingPageHeroProps } from "./LandingPageHero.types";

const LandingPageHero : FC<LandingPageHeroProps> = ({setIsOpen}) => {
  return (
    <section className="mt-8 md:mt-16 lg2:mt-24 flex flex-col items-center">
      <h1 className="text-center font-bold not-italic font-Montserrat text-4xl md:text-6xl lg2:text-8xl text-white">Platform for <br/> web3 Creators.</h1>
      <p className="font-light text-center text-base md:text-2xl text-white my-4 md:my-6 lg2:my-8">We built a decentralized version of Patreon catered to <br/> the web3 creator community. </p>
      <SearchBox SearchIcon={LandingPageSearchIcon} className="w-full md:w-96 pl-20 pr-4" height="h-12 md:h-16" placeholder="Find a creator you love" rightSpacing="mr-6">
        <Button px="px-6 md:px-10" height="h-12 md:h-16" onClick={()=> {}} text="Search" type="secondary"  />
      </SearchBox>
      <article className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-20 lg:mt-32 xl:mt-48 md:gap-6">
        <SectionHeading text="Earn for curating exclusive web3 contents." />
        <div className="mt-6 md:mt-0">
          <p className="font-medium text-base md:text-lg text-white">On <span className="font-Montserrat font-semibold">Patreon3</span>, you can let your fans become active participants in the work they love by offering them a monthly membership.</p>
          <Button px="px-4 md:px-6" height='h-12 md:h-55px' onClick={() => {setIsOpen(true)}} text='Connect Wallet' type='secondary' className="mt-4 md:mt-8"  />
        </div>
      </article>
    </section>
  )
}

export default LandingPageHero;