import Button from "$components/Button/Button";
import LandingPageLogo from "assets/svg/landing_page_logo";
import Link from "next/link";
import { FC } from "react";

const LandingPageHeader : FC = ({}) => {
  return (
    <header className="px-12 lg:px-24 py-6 lg:py-9 flex flex-col md:flex-row justify-between items-center">
      <Link href="/">
        <a>
          <LandingPageLogo />
        </a>
      </Link>
      <nav className="flex items-center mt-3 md:mt-0">
        <Link href="/">
          <a className="font-medium text-center text-base md:text-lg text-white opacity-80 mr-4 md:mr-14 h">
            Curate a content-
          </a>
        </Link>
        <Button height='h-12 md:h-55px' onClick={() => {}} text='Connect Wallet' type='secondary'  />
      </nav>
    </header>
  )
}

export default LandingPageHeader;