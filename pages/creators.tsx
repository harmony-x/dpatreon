import Button from "$components/Button/Button";
import CreatorsSearch from "$components/CreatorsPage/CreatorsSearch/CreatorsSearch";
import SearchBox from "$components/SearchBox/SearchBox";
import Footer from "$layouts/Footer/Footer";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import CreatorsSearchIcon from "$svg/creators_search_icon";
import UserFooterLogo from "$svg/user_footer_logo";
import { getCreators } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";

const Home: NextPage = () => {
  const { data, isLoading, isError } = useQuery("posts", getCreators);
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Creators page</title>
        <meta name="description" content="Search and View creators" />
      </Head>

      <main className="font-Gilroy lg3:container mx-auto mb-24 lg:mb-32">
        <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        <div className="w-full max-w-768px mx-auto mt-8 md:mt-14 px-6 md:px-12 lg:px-24">
          <div className="mb-10 w-full">
            <SearchBox
              leftPosition="left-7"
              SearchIcon={CreatorsSearchIcon}
              className="w-full max-w-768px pl-20 pr-4 bg-gray4 rounded-5xl text-base md:text-lg font-normal text-gray5 text-opacity-60"
              height="h-12 md:h-16"
              placeholder="Type creators wallet id"
              rightSpacing="mr-0 md:mr-8"
            >
              <Button
                px="px-6 md:px-10"
                height="h-12 md:h-55px"
                onClick={() => {}}
                text="Search"
                type="primary"
                className="md:ml-8"
              />
            </SearchBox>
          </div>
          <p className="mb-6 text-black font-semibold text-center md:text-left">List of creators</p>
          {/* <p className="mb-6 text-black font-semibold text-center md:text-left">Results for “Lilydusk”</p> */}
          {isLoading ? <div className="relative w-full h-36"><Image src="/load.gif" alt="" layout="fill" /></div> : isError || !data ? <p className="mb-6 text-red-600 font-semibold text-center md:text-left">Error loading creators</p> : <CreatorsSearch creators={data} />}
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

export default Home;
