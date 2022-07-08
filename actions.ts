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

export const getCreators = async () =>
  await (
    await apiInstance.get<Creator[]>("/creators/")
  ).data;

export const postPost = async (body: CreatorPost) =>
  await (
    await apiInstance.post<CreatorPost>(
      `/posts/${body.creatorAddress}/`,
      body.data
    )
  ).data;
