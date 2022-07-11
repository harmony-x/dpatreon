import { apiInstance } from "$utils/api";

export interface Tier {
  benefits: string;
  description: string;
  image: string;
  published: boolean;
  price: number;
  title: string;
}

export interface Creator {
  about: string;
  coverPhoto: string;
  creatorAddress: string;
  isAreCreating: string;
  launched: boolean;
  name: string;
  patrons: number;
  profilePhoto: string;
  tiers: [Tier, Tier, Tier];
}

export interface CreatorPost {
  data: {
    image: string;
    tags: string;
    text: string;
    tier: number;
  };
  creatorAddress: string;
}

export interface LikePost {
  creatorAddress: string;
  postId: number;
}

export interface CreatorPosts {
  author: string;
  created_at: string;
  id: number;
  image: string;
  tags: string;
  text: string;
  tier: number;
  comments: string[];
  likes: { author: string }[];
}

export const getCreators = async () =>
  await (
    await apiInstance.get<Creator[]>("/creators/")
  ).data;

export const getPosts = async () =>
  await (
    await apiInstance.get<CreatorPosts[]>(`/posts/`)
  ).data;

export const postPost = async (body: CreatorPost) =>
  await (
    await apiInstance.post<CreatorPost>(
      `/posts/${body.creatorAddress}/`,
      body.data
    )
  ).data;

export const LikePost = async ({ creatorAddress, postId }: LikePost) =>
  await (
    await apiInstance.post<LikePost>(`/posts/${postId}/like/${creatorAddress}/`)
  ).data;
