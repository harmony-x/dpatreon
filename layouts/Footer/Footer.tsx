import { footerDataOne, footerDataTwo } from "$utils/data";
import FooterCopyright from "$svg/footer_copyright";
import FooterInstagram from "$svg/footer_instagram";
import FooterTelegram from "$svg/footer_telegram";
import FooterTwitter from "$svg/footer_twitter";
import Link from "next/link";
import { FC } from "react";
import { FooterProps } from "./Footer.types";

const Footer : FC<FooterProps> = ({theme: {fill, text1, text2, LogoSVG}}) => {
  return (
    <footer className="font-Gilroy lg3:container mx-auto">
      <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start md:justify-between px-6 md:px-12 lg:px-24 pt-16 pb-20 gap-8 md:gap-0">
        <LogoSVG />
        {[1, 2].map((item) => (
          <nav className="flex flex-col gap-3 items-center md:items-start" key={item}>
          <h5 className={`text-base md:text-lg ${text1} not-italic font-bold`}>{item === 1 ? 'About Us' : 'Help'}</h5>
          {item === 1 && footerDataOne.map(({ id, link, name }) => (
            <Link href={link} key={id}>
              <a className={`font-light ${text2} text-opacity-60 text-base md:text-lg`}>{name}</a>
            </Link>
          ))}
          {item === 2 && footerDataTwo.map(({ id, link, name }) => (
            <Link href={link} key={id}>
              <a className={`font-light ${text2} text-opacity-60 text-base md:text-lg`}>{name}</a>
            </Link>
          ))}
        </nav>
        ))}
        <nav className="flex flex-col gap-16 items-center md:items-start">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h5 className={`text-base md:text-lg ${text1} not-italic font-bold`}>Contact Us</h5>
            <Link href={'/'}>
              <a className={`font-light ${text2} text-opacity-60 text-base md:text-lg`}>support@Patreon3.com</a>
            </Link>
          </div>
          <div className="flex gap-4">
            <FooterTwitter pathFill={fill} />
            <FooterInstagram pathFill={fill} />
            <FooterTelegram fill={fill} />
          </div>
        </nav>
      </div>
      <p className="border-t-xs border-t-footerBorderColor border-opacity-60 py-6 text-center flex justify-center items-center gap-4">
        <FooterCopyright pathFill={fill} /> 
        <span className={`font-light ${text2} text-opacity-60 text-base md:text-lg`}>2022 Patreon3. All Rights Reserved</span>
      </p>
    </footer>
  )
}

export default Footer;