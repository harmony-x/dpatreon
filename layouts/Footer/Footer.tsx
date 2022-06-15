import { footerDataOne, footerDataTwo } from "$utils/data";
import FooterCopyright from "assets/svg/footer_copyright";
import FooterInstagram from "assets/svg/footer_instagram";
import FooterTelegram from "assets/svg/footer_telegram";
import FooterTwitter from "assets/svg/footer_twitter";
import LandingPageLogo from "assets/svg/landing_page_logo";
import Link from "next/link";
import { FC } from "react";
import { FooterProps } from "./Footer.types";

const Footer : FC<FooterProps> = ({theme}) => {
  return (
    <footer className="font-Gilroy lg3:container mx-auto">
      <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between px-6 md:px-12 lg:px-24 pt-16 pb-20 gap-8 md:gap-0">
        <LandingPageLogo />
        {[1, 2].map((item) => (
          <nav className="flex flex-col gap-3 items-center md:items-start" key={item}>
          <h5 className="text-base md:text-lg text-white not-italic">{item === 1 ? 'About Us' : 'Help'}</h5>
          {item === 1 && footerDataOne.map(({ id, link, name }) => (
            <Link href={link} key={id}>
              <a className="font-light text-white opacity-60 text-base md:text-lg">{name}</a>
            </Link>
          ))}
          {item === 2 && footerDataTwo.map(({ id, link, name }) => (
            <Link href={link} key={id}>
              <a className="font-light text-white opacity-60 text-base md:text-lg">{name}</a>
            </Link>
          ))}
        </nav>
        ))}
        <nav className="flex flex-col gap-16 items-center md:items-start">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h5 className="text-base md:text-lg text-white not-italic">Contact Us</h5>
            <Link href={'/'}>
              <a className="font-light text-white opacity-60 text-base md:text-lg">support@Patreon3.com</a>
            </Link>
          </div>
          <div className="flex gap-4">
            <FooterTwitter pathFill={theme} />
            <FooterInstagram pathFill={theme} />
            <FooterTelegram fill={theme} />
          </div>
        </nav>
      </div>
      <p className="border-t-xs border-t-footerBorderColor border-opacity-60 py-6 text-center flex justify-center items-center gap-4">
        <FooterCopyright pathFill={theme} /> 
        <span className="font-light text-white opacity-60 text-base md:text-lg">2022 Patreon3. All Rights Reserved</span>
      </p>
    </footer>
  )
}

export default Footer;