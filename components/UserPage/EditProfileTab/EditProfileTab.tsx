import { FC, Fragment, useRef, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { EditProfileTabProps } from "./EditProfileTab.types";
import Button from "$components/Button/Button";
import { getCreators } from "actions";
import { useQuery } from "react-query";
import { useWeb3React } from "@web3-react/core";
import { patreonContract } from "$utils/contracts";

const EditProfileTab: FC<EditProfileTabProps> = ({
  leftTabPanel,
  rightTabPanel,
  middlePanel,
}) => {
  const { account, library } = useWeb3React();
  const { data, isSuccess } = useQuery("creators", getCreators);
  const launched =
    isSuccess &&
    data!.filter((creator) => creator.creatorAddress === account)[0].launched;
  return (
    <Tab.Group as="div" className="c-tab">
      <Tab.List className="border-opacity-20 border-b-gray3 border-b-xs flex justify-between">
        <div className="translate-y-3">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`text-sm lg:text-base text-black hover:text-opacity-100 pb-2 transition-all outline-none bg-none mr-6 ${
                  selected
                    ? "font-semibold border-b-black border-b-2"
                    : "text-opacity-60 font-light"
                }`}
              >
                Basics
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={` text-sm lg:text-base text-black  hover:text-opacity-100 pb-2 transition-all outline-none bg-none mr-6 ${
                  selected
                    ? "font-semibold border-b-black border-b-2"
                    : "text-opacity-60 font-light"
                }`}
              >
                Tiers
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={` text-sm lg:text-base text-black  hover:text-opacity-100 pb-2 transition-all outline-none bg-none ${
                  selected
                    ? "font-semibold border-b-black border-b-2"
                    : "text-opacity-60 font-light"
                }`}
              >
                Preview
              </button>
            )}
          </Tab>
        </div>

        <Button
          px="px-7"
          height="h-9"
          text={launched ? "Launched" : "Launch"}
          type="primary"
          className={`w-max mb-2` + (launched ? " bg-opacity-40" : "")}
          disabled={launched}
          onClick={async () => await patreonContract(library).launch()}
        />
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="mt-6">{leftTabPanel}</Tab.Panel>
        <Tab.Panel className="mt-6">{middlePanel}</Tab.Panel>
        <Tab.Panel className="mt-6">{rightTabPanel}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default EditProfileTab;
