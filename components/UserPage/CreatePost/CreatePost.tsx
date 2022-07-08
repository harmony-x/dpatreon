import Button from "$components/Button/Button";
import UploadImage from "$components/UploadImage/UploadImage";
import DeleteTag from "$svg/delete_tag";
import { FileType } from "$types/userpage";
import { useWeb3React } from "@web3-react/core";
import { FC, useState } from "react";
import { CreatePostProps } from "./CreatePost.types";

const ImagePostPhoto: React.FC<FileType> = ({ file, fileLoader }) => (
  <div
    style={{ backgroundImage: `url(${file || ""})` }}
    className={`w-full min-h-253px ${
      file ? "" : "bg-gray7"
    } cursor-pointer flex items-center justify-center bg-cover bg-no-repeat bg-center`}
  >
    {fileLoader && (
      <div className="flex justify-center items-center">
        <div
          className="animate-pulse inline-block w-6 h-6 bg-primary bg-opacity-40 rounded-full"
          role="status"
        />
      </div>
    )}
    {!fileLoader && (
      <div className="flex flex-col items-center justify-center">
        <Button
          px="px-5"
          height="h-9"
          onClick={() => {}}
          text="Upload image"
          type="primary"
          className="w-max bg-opacity-40"
        />
        <p className="text-black text-base font-normal mt-4">
          Any JPG, JPEG, PNG up to 25MB
        </p>
      </div>
    )}
  </div>
);

const CreatePost: FC<CreatePostProps> = ({
  postImage,
  postImageLoader,
  setPostImage,
  setPostImageLoader,
  onChangePostTitle,
  posTitle,
  onChangePostDetails,
  postDetails,
  postTags,
  setPostTags,
}) => {
  const [tagInput, setTagInput] = useState<string>("");
  return (
    <article className="pt-4 pb-14 px-6 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-stretch min-h-588px">
      <UploadImage
        gap="gap-1 md:gap-9"
        id="fileProfile"
        fileLoader={postImageLoader}
        setFileLoader={setPostImageLoader}
        file={postImage}
        InputComponent={
          <ImagePostPhoto file={postImage} fileLoader={postImageLoader} />
        }
        setFile={setPostImage}
        labelComponent={<></>}
        labelWidth="w-full"
      />
      <input
        value={posTitle}
        placeholder="Post title (required)"
        type="text"
        id="postTitle"
        name="postTitle"
        className={`w-full bg-transparent text-black placeholder:text-opacity-60 text-xl font-bold mt-8`}
        onChange={onChangePostTitle}
        required
      />
      <textarea
        value={postDetails}
        placeholder="Go on, type something"
        id="postDetails"
        name="postDetails"
        className={`w-full bg-transparent text-black placeholder:text-opacity-60 text-base font-normal border-b-xs border-opacity-20 border-gray3 mt-4 outline-none h-40`}
        onChange={onChangePostDetails}
        required
      />
      <p className="text-black text-lg font-semibold mt-5">Tags</p>
      <input
        value={tagInput}
        placeholder="Type tags"
        type="text"
        id="tagInput"
        name="tagInput"
        className={`w-full pb-3 bg-transparent text-black placeholder:text-opacity-60 text-xs font-normal border-b-xs border-opacity-20 border-gray3 my-4`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTagInput(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setPostTags((postTags) => [...postTags, tagInput]);
            setTagInput("");
          }
        }}
        required
      />
      <div className="flex">
        {postTags.map(
          (item, index) =>
            item && (
              <p
                className={`px-2 py-1 bg-gray3 bg-opacity-10 rounded-4xl text-black text-opacity-60 text-xs flex w-max items-center leading-none ${
                  index !== 0 && "ml-2"
                }`}
                key={index}
              >
                {item}{" "}
                <DeleteTag
                  onClick={() =>
                    setPostTags((postTags) =>
                      postTags.filter((item, _index) => _index !== index)
                    )
                  }
                  className="ml-1 w-2 h-2 cursor-pointer"
                />
              </p>
            )
        )}
      </div>
    </article>
  );
};

export default CreatePost;
