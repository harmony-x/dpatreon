import Button from "$components/Button/Button";
import SearchBox from "$components/SearchBox/SearchBox";
import LandingPageSearchIcon from "$svg/landing_page-search_icon";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { LandingPageHeroProps } from "./LandingPageHero.types";

const LandingPageHero : FC<LandingPageHeroProps> = ({setIsOpen}) => {
  const [search, setSearch] = React.useState<string>("");
  const router = useRouter();

  const handleInputSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <section className=" flex flex-col items-stretch">
      <div className="relative py-24">
      <div className="landing-page-bg absolute w-full left-0 top-0 h-full z-auto" />
      <h1 className="text-center font-bold not-italic font-Montserrat text-4xl md:text-6xl lg2:text-8xl text-white z-10 relative">Platform for <br/> web3 Creators.</h1>
      <p className="font-light text-center text-base md:text-2xl text-white my-4 md:my-6 lg2:my-8 z-10 relative">We built a decentralized version of Patreon catered to <br/> the web3 creator community. </p>
      <div className="flex justify-center z-10 relative">
        <form onSubmit={(e) => {
          e.preventDefault();
          router.push({
            pathname: '/creators',
            query: {
              name: search
            }
          });
        }}>
          <SearchBox onChange={handleInputSearch} containerClassName="flex flex-col md:flex-row md:items-center md:justify-between" leftPosition="left-7" SearchIcon={LandingPageSearchIcon} className="w-full md:w-96 pl-20 pr-4 bg-transparent rounded-5xl border border-white border-opacity-80 text-base md:text-lg font-normal text-gray1" height="h-12 md:h-16" placeholder="Find a creator you love" rightSpacing="mr-6">
            <Button px="px-6 md:px-10" height="h-12 md:h-16" onClick={()=> {}} text="Search" type="primary"  />
          </SearchBox>
        </form>
      </div>
      </div>
      <article className="flex flex-col md:flex-row justify-between items-center mt-16 xl:mt-24 md:gap-6 lg3:container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className={`font-bold not-italic font-Montserrat text-2xl md:text-3xl lg2:text-4xl lg3:text-6xl text-black`}>Earn for curating exclusive <span className='text-primary'>web3</span> contents.</h2>
        <div className="mt-3 md:mt-0">
          <p className="font-medium text-lg md:text-xl text-black">On <span className="font-Montserrat font-semibold">Patreon3</span>, you can let your fans become active participants in the work they love by offering them a monthly membership.</p>
          <Button px="px-4 md:px-6" height='h-12 md:h-55px' onClick={() => {setIsOpen(true)}} text='Connect Wallet' type='primary' className="mt-4 md:mt-7"  />
        </div>
      </article>
    </section>
  )
}

export default LandingPageHero;