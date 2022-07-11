import Button from "$components/Button/Button";
import ActionCard from "$components/UserPage/ActionCard/ActionCard";
import ProfileCard from "$components/UserPage/ProfileCard/ProfileCard";
import MustConnect from "$components/Wrapper/MustConnect";
import FeedPosts from "$layouts/FeedPosts/FeedPosts";
import Footer from "$layouts/Footer/Footer";
import ThreeColumnLayout from "$layouts/ThreeColumnLayout/ThreeColumnLayout";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { truncateAddress } from "$utils/wallet";
import { useWeb3React } from "@web3-react/core";
import { getCreators } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);
  const { account } = useWeb3React();
  const creator = data?.find((c) => c.creatorAddress === account);
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Feeds</title>
        <meta name="description" content="User Homepage, view all feedss" />
      </Head>
      <main className="font-Gilroy lg3:container mx-auto mb-24 lg:mb-32">
        <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        <MustConnect>
          <div className="px-6 md:px-12 lg:px-24 mt-12">
            <ThreeColumnLayout
              centerColumn={<FeedPosts />}
              leftColumn={
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
              }
              rightColumn={
                <ActionCard
                  button={
                    <Button
                      px="px-5"
                      height="h-42px"
                      link="/edit-profile"
                      text={!creator ? "Finish my page" : "Edit profile"}
                      type="card1"
                      className="inline-block"
                    />
                  }
                  text={
                    !creator ? (
                      <>
                        You’re almost there! Complete{" "}
                        <br className="hidden md:block" /> your page and take it
                        live.
                      </>
                    ) : (
                      <>
                        Your page is complete, you can always edit your profile
                      </>
                    )
                  }
                />
              }
            />
          </div>
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

export default Home;
