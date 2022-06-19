import Button from '$components/Button/Button'
import FinishProfileCard from '$components/UserPage/FinishProfileCard/FinishProfileCard'
import ProfileCard from '$components/UserPage/ProfileCard/ProfileCard'
import FeedPosts from '$layouts/FeedPosts/FeedPosts'
import Footer from '$layouts/Footer/Footer'
import ThreeColumnLayout from '$layouts/ThreeColumnLayout/ThreeColumnLayout'
import UserPageHeader from '$layouts/UserPageHeader/UserPageHeader'
import UserFooterLogo from '$svg/user_footer_logo'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Head>
        <title>Dpatreon - Feeds</title>
        <meta name="description" content="User Homepage, view all feedss" />
      </Head>
      <main className='font-Gilroy lg3:container mx-auto mb-24 lg:mb-32'>
          <UserPageHeader className='px-2 md:px-7 lg:px-16' />
          <div className="px-6 md:px-12 lg:px-24 mt-12">
            <ThreeColumnLayout centerColumn={<FeedPosts />} leftColumn={<ProfileCard CTAButton={<Button px="px-4 md:px-6" height='h-42px' onClick={() => {}} text='Share' type='card1' className="w-full"  />} creation="" patrons={0} userName="0x7ceb23fd6bc...619" />} rightColumn={<FinishProfileCard />} />
          </div>
      </main>
      <Footer theme={{fill: "#333333", text1: "text-black", text2: "text-black", LogoSVG: UserFooterLogo}} />
    </div>
  )
}

export default Home
