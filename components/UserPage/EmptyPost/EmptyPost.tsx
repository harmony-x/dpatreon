import Button from "$components/Button/Button";
import EmptyPostImage from "$png/empty_post";
import { FC } from "react";

const EmptyPost : FC = ({}) => {
  return (
    <article className="bg-white border-xs border-opacity-20 border-gray3 w-full px-5 text-center flex flex-col items-center justify-center h-488px">
      <h4 className="mb-1 text-black text-base md:text-lg font-semibold">You don’t have any feed yet</h4>
      <p className="text-black text-opacity-40 text-sm mb-5">Support or follow creators to see posts in your feed</p>
      <Button px="px-8" height='h-50px' link="/creators" text='Find creators you love' type='primary' className="mb-5"  />
      <EmptyPostImage />
    </article>
  )
}

export default EmptyPost;
