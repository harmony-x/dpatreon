import Button from "$components/Button/Button";
import MembershipCardTwo from "$components/CreatorPage/MembershipCardTwo/MembershipCardTwo";
import Loading from "$components/Loading/Loading";
import PostTabs from "$components/PostTabs/PostTabs";
import PostCard from "$components/UserPage/PostCard/PostCard";
import ProfileCard from "$components/UserPage/ProfileCard/ProfileCard";
import MustConnect from "$components/Wrapper/MustConnect";
import useLocalStorage from "$hooks/useLocalStorage";
import CreatorShowcase from "$layouts/CreatorShowcase/CreatorShowcase";
import Footer from "$layouts/Footer/Footer";
import ThreeColumnLayout from "$layouts/ThreeColumnLayout/ThreeColumnLayout";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { formatDate, getLocalStorage, setLocalStorage } from "$utils/function";
import { useWeb3React } from "@web3-react/core";
import { Creator, CreatorPosts, getCreators, getPosts } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const CreatorPosts: NextPage = () => {
  const { data, isLoading, isError } = useQuery("creators", getCreators);
  const {
    data: creatorPostsData,
    isLoading: isLoadingCreatorPosts,
    error: isCreatorPostsError,
  } = useQuery("creatorPosts", getPosts);
  const { account } = useWeb3React();
  const [creator, setCreator] = React.useState<Creator | null>(null);
  const [posts, setPosts] = React.useState<CreatorPosts[] | null>(null);
  const { query } = useRouter();
  const [followings, setFollowings] = useLocalStorage<string[]>("followings");
  const { id } = query;

  React.useEffect(() => {
    if (query?.id && data) {
      setCreator(
        data.find(
          (item) => item.creatorAddress === query?.id && item.launched
        ) || null
      );
    }
  }, [query, data]);

  React.useEffect(() => {
    if (query?.id && creatorPostsData) {
      setPosts(
        creatorPostsData.filter(({ author }) => author === query?.id) || null
      );
    }
  }, [query, creatorPostsData]);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Creator's posts</title>
        <meta name="description" content="Dpatreon - View creator's posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Gilroy mb-16">
        <div className="lg3:container mx-auto">
          <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        </div>
        {!isLoading && creator ? (
          <MustConnect>
            <>
              <CreatorShowcase img={creator.coverPhoto} />
              <div className="px-6 md:px-12 lg:px-24 mt-12 md:mt-32 lg3:container mx-auto">
                <ThreeColumnLayout
                  centerColumn={
                    <PostTabs
                      tabs={[
                        {
                          value: (
                            <div className="flex flex-col gap-8">
                              {posts && posts.length ? (
                                posts
                                  .map(
                                    ({
                                      author,
                                      created_at,
                                      id,
                                      image,
                                      tags,
                                      text,
                                      tier,
                                      likes,
                                    }) => ({
                                      image,
                                      tags: tags.split("|"),
                                      time: formatDate(created_at),
                                      title: text,
                                      likes: likes.length,
                                      creatorId: author,
                                      locked: tier === -1 ? false : true,
                                      id,
                                      liked:
                                        likes.some(
                                          ({ author }) => author === account
                                        ) || false,
                                    })
                                  )
                                  .map((item, index) => (
                                    <PostCard {...item} key={index} />
                                  ))
                              ) : (
                                <>No posts from creator</>
                              )}
                            </div>
                          ),
                          name: "Posts",
                        },
                      ]}
                    />
                  }
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
                            onClick={() => {
                              if (followings?.length) {
                                followings?.includes(creator.creatorAddress)
                                  ? setFollowings(
                                      followings.filter(
                                        (item) =>
                                          item !== creator.creatorAddress
                                      )
                                    )
                                  : setFollowings([
                                      ...followings,
                                      creator.creatorAddress,
                                    ]);
                              } else if (!followings?.length || !followings) {
                                setFollowings([creator.creatorAddress]);
                              }
                            }}
                            text={
                              followings?.includes(creator.creatorAddress)
                                ? "Following"
                                : "Follow"
                            }
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
                      {creator.tiers
                        .filter(({ published }) => published)
                        .map((item, index) => (
                          <MembershipCardTwo key={index} {...item} />
                        ))}
                    </>
                  }
                />
              </div>
            </>
          </MustConnect>
        ) : (
          <div className="flex items-center justify-center min-h-50vh">
            <Loading className="w-14 h-14 mt-16" />
          </div>
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

export default CreatorPosts;
