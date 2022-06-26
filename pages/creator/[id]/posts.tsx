import Button from "$components/Button/Button";
import MembershipCardTwo from "$components/CreatorPage/MembershipCardTwo/MembershipCardTwo";
import ProfileCard from "$components/UserPage/ProfileCard/ProfileCard";
import CreatorShowcase from "$layouts/CreatorShowcase/CreatorShowcase";
import FeedPosts from "$layouts/FeedPosts/FeedPosts";
import Footer from "$layouts/Footer/Footer";
import ThreeColumnLayout from "$layouts/ThreeColumnLayout/ThreeColumnLayout";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { Creator, getCreators } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const CreatorPosts: NextPage = () => {
  const { data, isLoading, isError } = useQuery("posts", getCreators);
  const [creator, setCreator] = React.useState<Creator | null>(null)
  const { query } = useRouter();
  const { id } = query;

  React.useEffect(() => {
    if(query?.id && data) {
      setCreator(data.find(item => item.creatorAddress === query?.id && item.launched) || null);
    }
  }, [query, data])
  
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Creator's posts</title>
        <meta name="description" content="Dpatreon - View creator's posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Gilroy mb-16">
        <div className="lg3:container mx-auto"><UserPageHeader className="px-2 md:px-7 lg:px-16" /></div>
        {!isLoading && creator ? <>
        <CreatorShowcase img={creator.coverPhoto} />
          <div className="px-6 md:px-12 lg:px-24 mt-12 md:mt-32 lg3:container mx-auto">
            <ThreeColumnLayout
              centerColumn={<FeedPosts />}
              leftColumn={
                <ProfileCard
                  profileLink={`/creator/${creator.creatorAddress}/`}
                  CTAButton={
                    <>
                      <Button
                        px="px-4 md:px-6"
                        height="h-42px"
                        onClick={() => {}}
                        text="Share"
                        type="card1"
                        className="w-full mb-3"
                      />
                      <Button
                        px="px-4 md:px-6"
                        height="h-42px"
                        onClick={() => {}}
                        text="Follow"
                        type="card1"
                        className="w-full"
                      />
                    </>
                  }
                  creation={creator.isAreCreating}
                  patrons={creator.patrons}
                  userName={creator.name}
                />
              }
              rightColumn={
                <>
                  <Button
                    px="px-4 md:px-6"
                    height="h-55px"
                    onClick={() => {}}
                    text="Become a patron"
                    type="primary"
                    className="w-full mb-3"
                    link={`/creator/${creator.creatorAddress}/become-a-patron`}
                  />
                  <p className="border-xs border-b-0 border-opacity-20 border-gray3 py-3 pl-4 lg:pl-6 text-black font-semibold text-base">
                    Tiers
                  </p>
                  {creator.tiers.filter(({published}) => published).map((item, index) => (
                    <MembershipCardTwo key={index} {...item} />
                  ))}
                </>
              }
            />
          </div>
        </> : <div>Loading ...</div>}
      </main>
      <Footer
        theme={{
          fill: "#333333",
          text1: "text-black",
          text2: "text-black",
          LogoSVG: UserFooterLogo,
        }}
      />
    </div>
  );
};

export default CreatorPosts;
