import MembershipCard from "$components/CreatorPage/MembershipCard/MembershipCard";
import MustConnect from "$components/Wrapper/MustConnect";
import CreatorShowcase from "$layouts/CreatorShowcase/CreatorShowcase";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import { Creator, getCreators } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const Creator: NextPage = () => {
  const { data, isLoading, isError } = useQuery("creators", getCreators);
  const [creator, setCreator] = React.useState<Creator | null>(null);
  const { query } = useRouter();

  React.useEffect(() => {
    if (query?.id && data) {
      setCreator(
        data.find(
          (item) => item.creatorAddress === query?.id && item.launched
        ) || null
      );
    }
  }, [query, data]);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Become a patron</title>
        <meta name="description" content="Dpatreon - Become a patron" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Gilroy mb-16">
        <div className="lg3:container mx-auto">
          <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        </div>
        {!isLoading && creator ? (
          <MustConnect>
            <>
              <CreatorShowcase img={creator.coverPhoto}>
                <div
                  style={{ backgroundImage: `url(${creator.profilePhoto})` }}
                  className="bg-center bg-primary bg-opacity-80 bg-no-repeat w-40 h-40 md:w-181px md:h-181px border-10px border-white rounded-50% absolute left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2"
                ></div>
              </CreatorShowcase>
              <div className="lg3:container mx-auto">
                <div className="text-center mt-24 mb-10 md:mb-16">
                  <h1 className="text-lg font-bold text-black mb-1">
                    {creator.name}
                  </h1>
                  <p className="text-black text-opacity-60 font-light text-base">
                    {creator.isAreCreating}
                  </p>
                </div>
                <section className="text-center px-6 md:px-12 lg:px-24">
                  <h2 className="mb-8 text-lg md:text-2xl text-black font-bold">
                    Select a membership level
                  </h2>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-2 lg:gap-10">
                    {creator.tiers
                      .map((item, tierId) => ({ ...item, tierId }))
                      .filter(({ published }) => published)
                      .map((item, index) => (
                        <div className="w-full md:w-1/2 lg:w-1/3" key={index}>
                          <MembershipCard
                            {...item}
                            creator={creator.creatorAddress}
                          />
                        </div>
                      ))}
                  </div>
                </section>
              </div>
            </>
          </MustConnect>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
};

export default Creator;
