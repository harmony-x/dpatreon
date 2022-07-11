export type PostCardType = {
  image: string;
  time: string;
  title: string;
  tags: string[];
  likes: number;
  creatorId: string;
  locked: boolean;
  id: number;
  liked: boolean;
};

export type FileType = {
  file: string | null;
  fileLoader: boolean;
};
