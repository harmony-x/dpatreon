import { ChoiceCardType, LinkList } from "$types/global";
import { HowtoCardDataType } from "$types/landingpage";
import LandingPageConnect from "$svg/landing_page_connect";
import Polygon from "$svg/polygon";
import BinanceChain from "$svg/binance_chain";
import Ethereum from "$svg/ethereum";
import Metamask from "$png/metamask";
import Coinbase1 from "$png/coinbase1";
import Coinbase2 from "$svg/coinbase2";
import { PostCardType } from "$types/userpage";

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dropdownLinks: { text: string; href: string }[] = [
  {
    text: "My page",
    href: "/edit-profile",
  },
  {
    text: "My Dashboard",
    href: "/dashboard",
  },
  {
    text: "Explore Creators",
    href: "/creators",
  },
  {
    text: "Posts from my creators",
    href: "/feed",
  },
];

export const howtoData: HowtoCardDataType[] = [
  {
    heading: "CONNECT",
    Icon: LandingPageConnect,
    title: "Connect Wallet",
    description:
      "After taking a glance at our landing page, connecting to your wallet gives you access to start curating web3 contents.",
  },
  {
    heading: "PAGE",
    Icon: LandingPageConnect,
    title: "Setup Page",
    description:
      "Successful connection to wallet leads to creator page setup, Setting up of your page can be completed within minutes.",
  },
  {
    heading: "CREATE",
    Icon: LandingPageConnect,
    title: "Create contents",
    description:
      "With your creator page published, you can then create different categories of web3 content.",
  },
];

export const footerDataOne: LinkList[] = [
  {
    name: "How it works",
    link: "/",
    id: 1,
  },
  {
    name: "Join Discord",
    link: "/",
    id: 2,
  },
];

export const footerDataTwo: LinkList[] = [
  {
    name: "Support",
    link: "/",
    id: 1,
  },
  {
    name: "Terms of Use",
    link: "/",
    id: 2,
  },
  {
    name: "Privacy Policy",
    link: "/",
    id: 3,
  },
];

export const networkOptions: ChoiceCardType[] = [
  {
    icon: Polygon(),
    title: "Polygon",
  },
  {
    icon: BinanceChain(),
    title: "Binance Chain",
    disabled: true,
  },
  {
    icon: Ethereum(),
    title: "Ethereum",
    disabled: true,
  },
];

export const walletOptions: ChoiceCardType[] = [
  {
    icon: Metamask(),
    title: "Metamask",
  },
  // {
  //   icon: Coinbase1(),
  //   title: 'Coinbase Wallet',
  // },
  // {
  //   icon: Coinbase2(),
  //   title: 'Coinbase Wallet',
  // }
];
