import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostCardProps } from "./PostCard.types";

const PostCard : FC<PostCardProps> = ({image, likes, tags, time, title}) => {
  return (
    <Link href={'/feed'}>
      <a className="bg-white border-xs border-opacity-20 border-gray3 w-full min-h-386px overflow-hidden">
        <div className="relative w-full min-h-200px">
          <Image className="hover:scale-150 transition-transform" layout="fill" src={image} alt={title} />
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
