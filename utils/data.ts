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
import { MembershipType } from "$types/creatorpage";

export const howtoData : HowtoCardDataType[] = [
  {
    heading: "CONNECT",
    Icon: LandingPageConnect,
    title: "Connect Wallet",
    description: "After taking a glance at our landing page, connecting to your wallet gives you access to start curating web3 contents.",
  },
  {
    heading: "PAGE",
    Icon: LandingPageConnect,
    title: "Setup Page",
    description: "Successful connection to wallet leads to creator page setup, Setting up of your page can be completed within minutes.",
  },
  {
    heading: "CREATE",
    Icon: LandingPageConnect,
    title: "Create contents",
    description: "With your creator page published, you can then create different categories of web3 content.",
  },
]

export const footerDataOne : LinkList[] = [
  {
    name: 'How it works',
    link: '/',
    id: 1
  },
  {
    name: 'Join Discord',
    link: '/',
    id: 2
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
  // {
  //   icon: Coinbase1(),
  //   title: 'Coinbase Wallet',
  // },
  // {
  //   icon: Coinbase2(),
  //   title: 'Coinbase Wallet',
  // }
]

export const postCardData : PostCardType[] = [
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655462407/Rectangle_206_c3krrf.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946,
    creatorId: '1',
    locked: false
  },
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655462407/Rectangle_206_c3krrf.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946,
    creatorId: '2',
    locked: true
  },
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655462407/Rectangle_206_c3krrf.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946,
    creatorId: '3',
    locked: true
  }
]

export const creatorPostCardData : PostCardType[] = [
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655462407/Rectangle_206_c3krrf.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `How NOT to Select White on White in Photoshop! - Finished PSD Download`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946,
    creatorId: '2',
    locked: true
  },
  {
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655462407/Rectangle_206_c3krrf.png',
    time: 'JUNE 1 AT 8:26 AM',
    title: `(Fast Pass) MPL Ep 103 - High-Res Artwork + Discussion`,
    tags: ['Photoshop Tutorial', 'Arts & Design'],
    likes: 946,
    creatorId: '4',
    locked: true
  }
]

export const creatorMembership : MembershipType[] = [
  {
    benefits: ['Patron-only newsletter', 'Access to drafts and works-in-Progress'],
    description: `Unlock access to Lilydusk's Patron-Only Facebook Group.`,
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655585351/Rectangle_204_1_srqngk.png',
    price: '1 MATIC',
    title: 'The Secret Garden'
  },
  {
    benefits: ['Special Mention in video credits.', ' All the Rewards above.'],
    description: ``,
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655585351/Rectangle_204_2_u24cdu.png',
    price: '5 MATIC',
    title: 'Celebrity Patreon'
  },
  {
    benefits: ['One-on-One Email Support.', 'Access to PSDs and Images used in tutorials on Patron-feed.'],
    description: ``,
    image: 'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655585350/Rectangle_204_mqthti.png',
    price: '10 MATIC',
    title: ' Master Patreon'
  }
]