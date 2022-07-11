import PostTabs from "$components/PostTabs/PostTabs";
import EmptyPost from "$components/UserPage/EmptyPost/EmptyPost";
import PostCard from "$components/UserPage/PostCard/PostCard";
import useLocalStorage from "$hooks/useLocalStorage";
import { formatDate } from "$utils/function";
import { useWeb3React } from "@web3-react/core";
import { getPosts } from "actions";
import React from "react";
import { useQuery } from "react-query";

const FeedPosts: React.FC = () => {
  const {
    data: creatorPostsData,
    isLoading: isLoadingCreatorPosts,
    error: isCreatorPostsError,
  } = useQuery("creatorPosts", getPosts);
  const { account } = useWeb3React();
  const [followings] = useLocalStorage<string[]>("followings");
  const allPosts = creatorPostsData
    ?.map(({ author, created_at, id, image, tags, text, tier, likes }) => ({
      image,
      tags: tags.split("|"),
      time: formatDate(created_at),
      title: text,
      likes: likes.length,
      creatorId: author,
      locked: tier === -1 ? false : true,
      id,
      liked: likes.some(({ author }) => author === account) || false,
    }))
    .filter(
      ({ locked, creatorId }) => followings?.includes(creatorId) && !locked
    );
  return (
    <PostTabs
      tabs={[
        {
          name: "All Posts",
          value: (
            <div className="flex flex-col gap-8">
              {allPosts && allPosts.length ? (
                allPosts.map((item, index) => (
                  <PostCard {...item} key={index} />
                ))
              ) : (
                <EmptyPost />
              )}
            </div>
          ),
        },
        {
          name: "Patron posts",
          value: <EmptyPost />,
        },
      ]}
    />
  );
};

export default FeedPosts;
