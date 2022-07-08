interface CreatePostBody {
  image: string;
  tags: string;
  text: string;
  tier: 0;
}

export interface CreatePostProps {
  postImageLoader: boolean;
  setPostImageLoader: React.Dispatch<React.SetStateAction<boolean>>;
  postImage: string | null;
  setPostImage: React.Dispatch<React.SetStateAction<string | null>>;
  posTitle: string;
  onChangePostTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  postDetails: string;
  onChangePostDetails: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  postTags: string[];
  setPostTags: React.Dispatch<React.SetStateAction<string[]>>;
}
