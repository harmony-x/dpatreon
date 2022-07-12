import Button from "$components/Button/Button";
import MembershipCard from "$components/CreatorPage/MembershipCard/MembershipCard";
import Loading from "$components/Loading/Loading";
import PostTabs from "$components/PostTabs/PostTabs";
import ActionCard from "$components/UserPage/ActionCard/ActionCard";
import PostCard from "$components/UserPage/PostCard/PostCard";
import ProfileCard from "$components/UserPage/ProfileCard/ProfileCard";
import MustConnect from "$components/Wrapper/MustConnect";
import CreatorShowcase from "$layouts/CreatorShowcase/CreatorShowcase";
import FeedPosts from "$layouts/FeedPosts/FeedPosts";
import Footer from "$layouts/Footer/Footer";
import ThreeColumnLayout from "$layouts/ThreeColumnLayout/ThreeColumnLayout";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { formatDate } from "$utils/function";
import { truncateAddress } from "$utils/wallet";
import { useWeb3React } from "@web3-react/core";
import { getCreators, getPosts } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";

const MyPage: NextPage = () => {
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);
  const {
    data: creatorPostsData,
    isLoading: isLoadingCreatorPosts,
    error: isCreatorPostsError,
  } = useQuery("creatorPosts", getPosts);
  const { account } = useWeb3React();
  const creator = data?.find((c) => c.creatorAddress === account);
  const posts = creatorPostsData?.filter((c) => c.author === account);
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Feeds</title>
        <meta name="description" content="User Homepage, view all feedss" />
      </Head>
      <main className="font-Gilroy mb-16">
        <div className="lg3:container mx-auto">
          <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        </div>
        {!isLoading ? (
          <MustConnect>
            <>
              <CreatorShowcase
                img={
                  creator?.coverPhoto ||
                  "https://res.cloudinary.com/dexg5uy3d/image/upload/v1655430059/Rectangle_192_qrnqfg.png"
                }
              ></CreatorShowcase>
              <div className="lg3:container mx-auto px-6 md:px-12 lg:px-24">
                <section className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center md:items-start mt-24 mb-10 md:mb-16">
                  <div className="w-full md:w-25%">
                    <ProfileCard
                      profileLink={`/creator/${account}/`}
                      CTAButton={
                        <Button
                          px="px-4 md:px-6"
                          height="h-42px"
                          onClick={() => {}}
                          text="Share"
                          type="card1"
                          className="w-full"
                        />
                      }
                      creation={creator?.isAreCreating || ""}
                      patrons={creator?.patrons || 0}
                      userName={truncateAddress(account!, true)}
                    />
                  </div>
                  <div className="w-full md:w-65%">
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
                                <>
                                  <h2>You don't have any post</h2>
                                  <Button
                                    px="px-4 md:px-6"
                                    height="h-42px"
                                    onClick={() => {}}
                                    text="Create post"
                                    type="card2"
                                    className="w-max"
                                    link="/create-post"
                                  />
                                </>
                              )}
                            </div>
                          ),
                          name: "My Posts",
                        },
                        {
                          value: creator ? (
                            creator.tiers
                              .map((item, tierId) => ({ ...item, tierId }))
                              .filter(({ published }) => published)
                              .map((item, index) => (
                                <div className="w-full" key={index}>
                                  <MembershipCard
                                    {...item}
                                    creator={creator.creatorAddress}
                                  />
                                </div>
                              ))
                          ) : (
                            <>
                              <h2>No membership plan available</h2>
                              <Button
                                px="px-4 md:px-6"
                                height="h-42px"
                                onClick={() => {}}
                                text="Create tiers"
                                type="card2"
                                className="w-max mt-4"
                                link="/edit-profile"
                              />
                            </>
                          ),
                          name: "My Membership",
                        },
                      ]}
                    />
                  </div>
                  <div className="w-full md:w-7%"></div>
                </section>
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

export default MyPage;
