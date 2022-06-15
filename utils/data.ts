import { HowtoCardDataType, LinkList } from "$types/landingpage";
import LandingPageConnect from "assets/svg/landing_page_connect";

export const howtoData : HowtoCardDataType[] = [
  {
    heading: "CONNECT",
    Icon: LandingPageConnect,
    title: "Connect Wallet",
    description: "After taking a glance at our landing page, connecting to your wallet gives you access to start curating web3 contents.",
  },
  {
    heading: "CONNECT",
    Icon: LandingPageConnect,
    title: "Connect Wallet",
    description: "Connect to your device and start using the app.",
  },
  {
    heading: "CONNECT",
    Icon: LandingPageConnect,
    title: "Connect Wallet",
    description: "Connect to your device and start using the app.",
  },
]

export const footerDataOne : LinkList[] = [
  {
    name: 'How it works',
    link: '/',
    id: 1
  },
  {
    name: 'Connect Wallet',
    link: '/',
    id: 2
  },
  {
    name: 'Join Discord',
    link: '/',
    id: 3
  }
]

export const footerDataTwo : LinkList[] = [
  {
    name: 'Support',
    link: '/',
    id: 1
  },
  {
    name: 'Terms of Use',
    link: '/',
    id: 2
  },
  {
    name: 'Privacy Policy',
    link: '/',
    id: 3
  }
]