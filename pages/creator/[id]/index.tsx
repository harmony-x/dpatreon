import Button from "$components/Button/Button";
import MembershipCard from "$components/CreatorPage/MembershipCard/MembershipCard";
import PostCard from "$components/UserPage/PostCard/PostCard";
import CreatorShowcase from "$layouts/CreatorShowcase/CreatorShowcase";
import Footer from "$layouts/Footer/Footer";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { creatorMembership, creatorPostCardData } from "$utils/data";
import { useWeb3React } from "@web3-react/core";
import { getCreators } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const Creator: NextPage = () => {
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);
  const router = useRouter();
  const { id } = router.query;

  // const { account } = useWeb3React();

  const creator = data?.filter((c) => c.creatorAddress === id);
  console.log(id, creator);
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Creator's page</title>
        <meta name="description" content="Dpatreon - View creator's page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Gilroy lg3:container mx-auto mb-16">
        <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        {isLoading && (
          <section className="text-center px-6 md:px-12 lg:px-24 py-24">
            Loading...
          </section>
        )}
        {isSuccess && creator?.length && (
          <>
            <CreatorShowcase img={creator[0].coverPhoto}>
              <div
                style={{
                  backgroundImage: `url(${creator[0].profilePhoto})`,
                  backgroundSize: "cover",
                }}
                className="bg-center bg-no-repeat w-40 h-40 md:w-181px md:h-181px border-10px border-white rounded-50% absolute left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2"
              ></div>
            </CreatorShowcase>
            <div className="text-center mt-24 mb-10 md:mb-16">
              <h1 className="text-lg font-bold text-black mb-1">
                {creator[0].name}
              </h1>
              <p className="text-black text-opacity-60 font-light text-base">
                is creating {creator[0].isAreCreating}
              </p>
            </div>
            <section className="text-center px-6 md:px-12 lg:px-24">
              <h2 className="mb-8 text-lg md:text-2xl text-black font-bold">
                Select a membership level
              </h2>
              <div className="flex flex-col md:flex-row gap-6 md:gap-2 lg:gap-10">
                {creator[0].tiers
                  .map((t) => ({
                    ...t,
                    benefits: t.benefits.split("|"),
                    price: t.price + " MATIC",
                  }))
                  .filter(t => t.published).map((item, index) => (
                    <MembershipCard key={index} {...item} />
                  ))}
              </div>
              <p className="flex flex-col gap-1 items-center mt-16">
                <span className="text-xl font-semibold">
                  {creator[0].patrons}
                </span>
                <span className="text-black text-opacity-60 font-medium">
                  PATRONS
                </span>
              </p>
              <div className="flex items-center justify-center gap-4 mt-8 mb-16">
                <Button
                  px="px-10 md:px-12"
                  height="h-42px"
                  onClick={() => {}}
                  text="Share"
                  type="card1"
                  className=""
                />
                <Button
                  px="px-10 md:px-12"
                  height="h-42px"
                  onClick={() => {}}
                  text="Follow"
                  type="card1"
                  className=""
                />
              </div>
              <div className="flex flex-col gap-8 items-center justify-center mx-auto w-full md:w-2/5">
                {creatorPostCardData.map((item, index) => (
                  <PostCard {...item} key={index} />
                ))}
                <div className="mx-6 md:mx-0 md:w-full">
                  <Button
                    px="px-10 md:px-12"
                    height="h-42px"
                    onClick={() => {}}
                    text="See all posts"
                    type="card1"
                    className="w-full md:mt-7"
                    link={`/creator/${id}/posts`}
                  />
                </div>
              </div>
            </section>
          </>
        )}
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

export default Creator;
