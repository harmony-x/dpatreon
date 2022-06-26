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

export const getCreators = async () => await (await apiInstance.get<Creator[]>("/creators/")).data;