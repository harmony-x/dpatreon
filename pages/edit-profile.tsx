import { BasicPanel } from "$components/UserPage/BasicPanel/BasicPanel";
import EditProfileTab from "$components/UserPage/EditProfileTab/EditProfileTab";
import { TierPanel } from "$components/UserPage/TiersPanel/TiersPanel";
import MustConnect from "$components/Wrapper/MustConnect";
import Footer from "$layouts/Footer/Footer";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import type { NextPage } from "next";
import Head from "next/head";

const EditProfile: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Edit profile</title>
        <meta name="description" content="Edit your profile" />
      </Head>

      <main className="lg3:container mx-auto mb-16">
        <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        <div className="mt-12 px-6 md:px-12 lg:px-24">
          <MustConnect>
            <EditProfileTab
              leftTabPanel={
                <BasicPanel
                  about=""
                  creation=""
                  coverImg=""
                  profileImg=""
                  name=""
                  preference=""
                />
              }
              middlePanel={<TierPanel />}
              rightTabPanel={<></>}
            />
          </MustConnect>
        </div>
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

export default EditProfile;
