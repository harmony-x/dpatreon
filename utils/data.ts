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

export const networkOptions : ChoiceCardType[] = [
  {
    icon: Polygon(),
    title: 'Polygon',
  },
  {
    icon: BinanceChain(),
    title: 'Binance Chain',
    disabled: true
  },
  {
    icon: Ethereum(),
    title: 'Ethereum',
    disabled: true
  }
]

export const walletOptions : ChoiceCardType[] = [
  {
    icon: Metamask(),
    title: 'Metamask',
  },
  {
    icon: Coinbase1(),
    title: 'Coinbase Wallet',
  },
  {
    icon: Coinbase2(),
    title: 'Coinbase Wallet',
  }
]

export const postCardData : PostCardType[] = [
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655430059/Rectangle_192_qrnqfg.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946
  },
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655430059/Rectangle_192_qrnqfg.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946
  },
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655430059/Rectangle_192_qrnqfg.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946
  }
]