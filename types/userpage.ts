export type PostCardType = {
  image: string;
  time: string;
  title: string;
  tags: string[];
  likes: number;
  creatorId: string;
  locked: boolean;
}

export type FileType = {
  file: string | null, 
  fileLoader: boolean
}