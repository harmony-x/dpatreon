import ConnectWallet from '$components/ConnectWallet/ConnectWallet'
import Footer from '$layouts/Footer/Footer'
import LandingPageHeader from '$layouts/LandingPageHeader/LandingPageHeader'
import LandingPageHero from '$layouts/LandingPageHero/LandingPageHero'
import LandingPageHowTo from '$layouts/LandingPageHowTo/LandingPageHowTo'
import UserFooterLogo from '$svg/user_footer_logo'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Dpatreon - Landing page</title>
        <meta name="description" content="Dpatreon Landing page" />
      </Head>

      <main className='font-Gilroy mb-16 bg-white'>
        <div className='lg3:container mx-auto px-6 md:px-12 lg:px-24'>
          <LandingPageHeader setIsOpen={setIsOpen} />
        </div>
        <LandingPageHero setIsOpen={setIsOpen} />
        <div className='lg3:container mx-auto px-6 md:px-12 lg:px-24'>
          <LandingPageHowTo />
          <h2 className={`font-bold not-italic font-Montserrat text-2xl md:text-3xl lg2:text-4xl lg3:text-6xl text-black mt-16 mb-6 md:mb-16 text-center`}>It’s <span className='text-primary'>easier</span> than you think</h2>
          <div className='w-full h-488px lg2:h-734px md:h-600px showcase-bg'></div>
        </div>
      </main>
      <div className='bg-white'>
        <Footer theme={{fill: "#333333", text1: "text-black", text2: "text-black", LogoSVG: UserFooterLogo}} />
      </div>
      <ConnectWallet isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Home
