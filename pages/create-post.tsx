import Button from "$components/Button/Button";
import Radio from "$components/Radio/Radio";
import CreatePost from "$components/UserPage/CreatePost/CreatePost";
import MustConnect from "$components/Wrapper/MustConnect";
import Footer from "$layouts/Footer/Footer";
import TwoColumnLayout from "$layouts/TwoColumnLayout/TwoColumnLayout";
import UserPageHeader from "$layouts/UserPageHeader/UserPageHeader";
import UserFooterLogo from "$svg/user_footer_logo";
import { useWeb3React } from "@web3-react/core";
import { postPost } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { useMutation } from "react-query";

const CreatePostPage: NextPage = () => {
  const { account } = useWeb3React();
  const [postImageLoader, setPostImageLoader] = useState<boolean>(false);
  const [postImage, setPostImage] = useState<string | null>(null);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postDetails, setPostDetails] = useState<string>("");
  const [postTags, setPostTags] = useState<string[]>([]);
  const [permission, setPermission] = useState<string>("public");
  const { data, isLoading, isError, mutate } = useMutation("posts", postPost);
  const validate = () => {
    if (
      postTitle.length < 1 ||
      !postImage ||
      postTags.length < 1 ||
      !permission
    ) {
      return false;
    }
    return true;
  };

  const handlePublish = () => {
    if (validate()) {
      console.log("publish");
      mutate({
        data: {
          text: postTitle,
          image: postImage as string,
          tags: postTags.join("|"),
          tier: permission === "public" ? -1 : 0,
        },
        creatorAddress: account as string,
      });
      setPostImage(null);
      setPostTitle("");
      setPostTags([]);
    }
  };
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Dpatreon - Create Post</title>
        <meta name="description" content="User Homepage, view all feedss" />
      </Head>
      <main className="font-Gilroy lg3:container mx-auto mb-24 lg:mb-32">
        <UserPageHeader className="px-2 md:px-7 lg:px-16" />
        <MustConnect>
          <div className="px-6 md:px-12 lg:px-24 mt-12">
            <h1 className="text-3xl text-black font-bold mb-7">
              Create Image Post
            </h1>
            <TwoColumnLayout
              leftColumn={
                <CreatePost
                  setPostImageLoader={setPostImageLoader}
                  postImageLoader={postImageLoader}
                  postImage={postImage}
                  setPostImage={setPostImage}
                  onChangePostTitle={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPostTitle(e.target.value)
                  }
                  posTitle={postTitle}
                  onChangePostDetails={(
                    e: React.ChangeEvent<HTMLTextAreaElement>
                  ) => setPostDetails(e.target.value)}
                  postDetails={postDetails}
                  setPostTags={setPostTags}
                  postTags={postTags}
                />
              }
              rightColumn={
                <>
                  <div className="mb-5">
                    <article className="pb-9 px-7 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-stretch">
                      <p className="text-lg font-semibold text-black mt-7 mb-4">
                        Who can see this post?
                      </p>
                      <Radio
                        options={[
                          {
                            component: (
                              <p className="text-base text-black font-normal">
                                Public
                              </p>
                            ),
                            value: "public",
                          },
                          {
                            component: (
                              <p className="text-base text-black font-normal">
                                Patrons Only
                              </p>
                            ),
                            value: "patrons",
                          },
                        ]}
                        setValue={setPermission}
                        value={permission}
                      />
                    </article>
                  </div>
                  <Button
                    px="px-5"
                    height="h-50px"
                    text="Publish now"
                    type="primary"
                    className={`w-full ${
                      validate() ? " " : "bg-opacity-40 cursor-not-allowed"
                    }`}
                    disabled={isLoading || !validate()}
                    onClick={handlePublish}
                  />
                </>
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

export default CreatePostPage;
