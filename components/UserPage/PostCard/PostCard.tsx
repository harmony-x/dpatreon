import Button from "$components/Button/Button";
import PostLockIcon from "$svg/post_lock_icon";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostCardProps } from "./PostCard.types";

const PostCard : FC<PostCardProps> = ({image, likes, tags, time, title, creatorId, locked}) => {
  return (
    locked ? 
      <article className="bg-white border-xs border-opacity-10 border-gray3 w-full min-h-386px overflow-hidden">
        <div className="relative w-full min-h-200px flex items-center flex-col justify-center">
          <Image className="hover:scale-150 transition-transform absolute top-0 left-0" layout="fill" src={image} alt={title} />
          {locked && 
            <>
            <div className="absolute top-0 left-0 w-full h-full bg-black2 opacity-60 backdrop-filter"/>
            <PostLockIcon className="mb-2 relative z-10" />
            <p className="mb-2 text-white text-sm md:text-base text-center font-semibold relative z-10">Unlock this post <br/> by becoming a patron</p>
            <Button height="h-9" link="/creator/2" px="px-8" text="Join now" type="unlock" className=" relative z-10" />
          </>
          }
        </div>
        <div className="py-4 pl-6 pr-8 md:pr-6 lg:pr-16 text-left">
          <p className="text-xs font-medium text-black text-opacity-40 mb-1">{time}</p>
          <h4 className="text-base md:text-lg text-black font-semibold mt-3 mb-3">{title}</h4>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, index) => (
              <p className="px-2 py-1 bg-gray3 bg-opacity-10 rounded-4xl text-black text-opacity-60 text-xs" key={index}>{tag}</p>
            ))}
          </div>
          <p className="text-black text-opacity-60 text-sm font-light">{likes} Likes</p>
        </div>
      </article>
    :
    <Link href={'/feed'}>
      <a className="bg-white border-xs border-opacity-10 border-gray3 w-full min-h-386px overflow-hidden">
        <div className="relative w-full min-h-200px flex items-center flex-col justify-center">
          <Image className="hover:scale-150 transition-transform absolute top-0 left-0" layout="fill" src={image} alt={title} />
          {locked && 
            <>
            <div className="absolute top-0 left-0 w-full h-full bg-black2 opacity-60 backdrop-filter"/>
            <PostLockIcon className="mb-2 relative z-10" />
            <p className="mb-2 text-white text-sm md:text-base text-center font-semibold relative z-10">Unlock this post <br/> by becoming a patron</p>
            <Button height="h-9" link="creator/2" px="px-8" text="Join now" type="unlock" className=" relative z-10" />
          </>
          }
        </div>
        <div className="py-4 pl-6 pr-8 md:pr-16">
          <p className="text-xs font-medium text-black text-opacity-40 mb-1">{time}</p>
          <h4 className="text-base md:text-lg text-black font-semibold mt-3 mb-3">{title}</h4>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, index) => (
              <p className="px-2 py-1 bg-gray3 bg-opacity-10 rounded-4xl text-black text-opacity-60 text-xs" key={index}>{tag}</p>
            ))}
          </div>
          <p className="text-black text-opacity-60 text-sm font-light">{likes} Likes</p>
        </div>
      </a>
    </Link>
  )
}

export default PostCard;
