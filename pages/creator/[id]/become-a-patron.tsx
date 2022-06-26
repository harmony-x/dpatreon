import MembershipCard from '$components/CreatorPage/MembershipCard/MembershipCard'
import CreatorShowcase from '$layouts/CreatorShowcase/CreatorShowcase'
import UserPageHeader from '$layouts/UserPageHeader/UserPageHeader'
import { creatorMembership } from '$utils/data'
import type { NextPage } from 'next'
import Head from 'next/head'

const Creator: NextPage = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Head>
        <title>Dpatreon - Become a patron</title>
        <meta name="description" content="Dpatreon - Become a patron" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-Gilroy mb-16'>
          <div className='lg3:container mx-auto'><UserPageHeader className='px-2 md:px-7 lg:px-16' /></div>
          <CreatorShowcase img='https://res.cloudinary.com/dexg5uy3d/image/upload/v1655582210/Rectangle_206_1_abqm82.png'>
            <div style={{backgroundImage: `url(https://res.cloudinary.com/dexg5uy3d/image/upload/v1655582260/Group_67_nmmlhx.png)`}} className='bg-center bg-no-repeat w-40 h-40 md:w-181px md:h-181px border-10px border-white rounded-50% absolute left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2'></div>
          </CreatorShowcase>
          <div className='lg3:container mx-auto'>
            <div className='text-center mt-24 mb-10 md:mb-16'>
              <h1 className='text-lg font-bold text-black mb-1'>Lilydusk</h1>
              <p className='text-black text-opacity-60 font-light text-base'>is creating Adult Romance Comics + NSFW art</p>
            </div>
            <section className='text-center px-6 md:px-12 lg:px-24'>
              <h2 className='mb-8 text-lg md:text-2xl text-black font-bold'>Select a membership level</h2>
              <div className='flex flex-col md:flex-row gap-6 md:gap-2 lg:gap-10'>
                {creatorMembership.map((item, index) => <MembershipCard key={index} {...item} />)}
              </div>
            </section>
          </div>
      </main>
    </div>
  )
}

export default Creator
