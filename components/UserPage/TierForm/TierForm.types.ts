import { Tier } from "actions";
import React from "react";
import { ExtendedTier } from "../TiersPanel/TiersPanel.types";

export interface TierFormProps extends Tier {
  edit: boolean;
  tiers: ExtendedTier[];
  setTiers: React.Dispatch<React.SetStateAction<ExtendedTier[]>>,
  id: number
};