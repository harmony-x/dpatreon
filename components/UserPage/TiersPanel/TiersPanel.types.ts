import { Tier } from "actions";

export interface ExtendedTier extends Tier {
  edit: boolean,
  id: number
}