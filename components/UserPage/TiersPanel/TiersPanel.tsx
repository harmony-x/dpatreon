import Button from "$components/Button/Button";
import { patreonContract } from "$utils/contracts";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { EditProfileHeading } from "../EditProfileHeading/EditProfileHeading";
import { useQuery } from "react-query";
import { Creator, getCreators } from "actions";
import { ExtendedTier } from "./TiersPanel.types";
import { TierForm } from "../TierForm/TierForm";

const defaultTiers = {
  benefits: '',
  description: '',
  edit: false,
  image: '',
  price: 0,
  published: false,
  title: ''
}

export const TierPanel: React.FC = () => {
  const { data, isLoading, isSuccess } = useQuery("creators", getCreators);
  const [tiers, setTiers] = React.useState<ExtendedTier[]>(Array<Omit<ExtendedTier, 'id'>>(3).fill(defaultTiers).map((item, index) => ({...item, id: index})));

  const { library, account } = useWeb3React();

  React.useEffect(() => {
    if (data) {
      const creator = data.find((c) => c.creatorAddress === account);
      setTiers(creator ? creator.tiers.map((item, index) => ({...item, edit: false, id: index})) : Array<Omit<ExtendedTier, 'id'>>(3).fill(defaultTiers).map((item, index) => ({...item, id: index})));
    }
  }, [])

  return (
    <>
      <EditProfileHeading
        description="Choose what to offer your patrons"
        title="Tiers"
      />
      {isLoading && tiers ? <>Loading...</> : 
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:flex-wrap lg2:flex-nowrap lg2:gap-4">
        {tiers.map((item, index) => <div className="w-full md:w-1/2 lg:w-2/5 lg2:w-1/3 md:pr-4 lg2:pr-0 lg:mb-4 lg2:mb-0" key={index}><TierForm {...item} setTiers={setTiers} tiers={tiers} /></div>)}
      </div>
      }
      <div className="w-full md:w-max mt-11">
              <Button
                px="px-6 md:px-16"
                height="h-12 md:h-55px"
                text="Add Tier"
                type="primary"
                className="w-full mt-4"
              />
      </div>
    </>
  )
};
