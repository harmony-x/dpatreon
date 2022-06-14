import Button from '$components/Button/Button'
import LandingPageHeader from '$layouts/LandingPageHeader/LandingPageHeader'
import LandingPageHero from '$layouts/LandingPageHero/LandingPageHero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black font-Gilroy lg3:container mx-auto px-6 md:px-12 lg:px-24'>
        <LandingPageHeader />
        <LandingPageHero />
      </main>
    </div>
  )
}

export default Home
