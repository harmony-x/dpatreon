import Button from "$components/Button/Button";
import Loading from "$components/Loading/Loading";
import AccountDetails from "$components/UserPage/AccountDetails/AccountDetails";
import ActionCard from "$components/UserPage/ActionCard/ActionCard";
import ProfileCard from "$components/UserPage/ProfileCard/ProfileCard";
import UserStats from "$components/UserPage/UserStats/UserStats";
import MustConnect from "$components/Wrapper/MustConnect";
import FeedPosts from "$layouts/FeedPosts/FeedPosts";
import Footer from "$layouts/Footer/Footer";
import TwoColumnLayout from "$layouts/TwoColumnLayout/TwoColumnLayout";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { truncateAddress } from "$utils/wallet";
import { useWeb3React } from "@web3-react/core";
import { getCreators, getPosts } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";

const Dashboard: NextPage = () => {
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);
  const {
    data: creatorPostsData,
    isLoading: isLoadingCreatorPosts,
    error: isCreatorPostsError,
  } = useQuery("creatorPosts", getPosts);
  const { account } = useWeb3React();
  const creator = data?.find((c) => c.creatorAddress === account);
  const isPost = creatorPostsData?.some((c) => c.author === account);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Dashboard</title>
        <meta name="description" content="User Homepage, view all feedss" />
      </Head>
      <main className="font-Gilroy lg3:container mx-auto mb-24 lg:mb-32">
        <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        <MustConnect>
          {!isLoading || !isLoadingCreatorPosts ? (
            <div className="px-6 md:px-12 lg:px-24 mt-12">
              <h1 className="text-3xl text-black font-bold mb-7">
                Hi, Creator
              </h1>
              <TwoColumnLayout
                leftColumn={
                  <AccountDetails
                    walletAddress={account || ""}
                    balance={5}
                    link={`https://mumbai.polygonscan.com/address/${account}`}
                  />
                }
                rightColumn={
                  <>
                    <UserStats
                      patrons={creator?.patrons || 0}
                      price={creator?.tiers[0]?.price || 0}
                    />
                    <div className="mt-5">
                      <ActionCard
                        button={
                          <Button
                            px="px-5"
                            height="h-42px"
                            link="/create-post"
                            text="Make a post"
                            type="card1"
                            className="w-max"
                          />
                        }
                        text={
                          creatorPostsData ? (
                            <>
                              {isPost ? (
                                <Button
                                  px="px-5"
                                  height="h-42px"
                                  link="/create-post"
                                  text="View all posts"
                                  type="card2"
                                  className="w-max"
                                />
                              ) : (
                                "You haven’t posted anything yet"
                              )}
                            </>
                          ) : null
                        }
                      />
                    </div>
                  </>
                }
              />
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-50vh">
              <Loading className="w-14 h-14 mt-16" />
            </div>
          )}
        </MustConnect>
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

export default Dashboard;
