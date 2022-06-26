import { Tier } from "actions";

export type MembershipCardProps = Tier & {
  tierId: number;
  creator: string;
};
