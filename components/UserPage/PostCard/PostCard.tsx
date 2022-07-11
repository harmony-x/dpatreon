import Button from "$components/Button/Button";
import Like from "$svg/like";
import Liked from "$svg/liked";
import PostLockIcon from "$svg/post_lock_icon";
import { LikePost } from "actions";
import Image from "next/image";
import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import { PostCardProps } from "./PostCard.types";

const PostCard: FC<PostCardProps> = ({
  image,
  likes,
  tags,
  time,
  title,
  creatorId,
  locked,
  id,
  liked,
}) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, mutate } = useMutation(
    "likePost",
    LikePost,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["creatorPosts"]);
      },
    }
  );
  return (
    <article className="bg-white border-xs border-opacity-10 border-gray3 w-full min-h-386px overflow-hidden">
      <div className="relative w-full min-h-200px flex items-center flex-col justify-center">
        <Image
          className="hover:scale-150 transition-transform absolute top-0 left-0"
          layout="fill"
          src={image}
          alt={title}
          objectFit="cover"
        />
        {locked && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-black2 opacity-60 backdrop-filter" />
            <PostLockIcon className="mb-2 relative z-10" />
            <p className="mb-2 text-white text-sm md:text-base text-center font-semibold relative z-10">
              Unlock this post <br /> by becoming a patron
            </p>
            <Button
              height="h-9"
              link={`/creator/${creatorId}/become-a-patron`}
              px="px-8"
              text="Join now"
              type="unlock"
              className=" relative z-10"
            />
          </>
        )}
      </div>
      <div className="py-4 pl-6 pr-8 md:pr-6 lg:pr-16 text-left">
        {
          <div className="flex justify-between items-center">
            <p className="text-xs font-medium text-black text-opacity-40 mb-1">
              {time}
            </p>
            {locked ? null : (
              <button
                onClick={() =>
                  !liked && mutate({ creatorAddress: creatorId, postId: id })
                }
              >
                {liked ? <Liked /> : <Like />}
              </button>
            )}
          </div>
        }
        <h4 className="text-base md:text-lg text-black font-semibold mt-3 mb-3">
          {title}
        </h4>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <p
              className="px-2 py-1 bg-gray3 bg-opacity-10 rounded-4xl text-black text-opacity-60 text-xs"
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="text-black text-opacity-60 text-sm font-light">
          {likes} {likes <= 1 ? "like" : "likes"}
        </p>
      </div>
    </article>
  );
};

export default PostCard;
