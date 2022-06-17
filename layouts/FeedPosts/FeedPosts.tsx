import PostTabs from "$components/PostTabs/PostTabs";
import EmptyPost from "$components/UserPage/EmptyPost/EmptyPost";
import PostCard from "$components/UserPage/PostCard/PostCard";
import { postCardData } from "$utils/data";
import React from "react";

const FeedPosts : React.FC = () => {
  return (
    <PostTabs leftTabPanel={<EmptyPost />} rightTabPanel={<div className='flex flex-col gap-8'>{postCardData.map((item, index) => <PostCard {...item} key={index} />)}</div>} />
  )
}

export default FeedPosts;