import { FC, Fragment, useRef, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { PostTabsProps } from "./PostTabs.types";

const PostTabs: FC<PostTabsProps> = ({ tabs }) => {
  return (
    <Tab.Group as="div" className="c-tab">
      <Tab.List className="border-opacity-20 border-b-gray3 border-b-xs">
        {tabs.map(({ name }, index) => (
          <Tab key={index} as={Fragment}>
            {({ selected }) => (
              <button
                className={`text-sm lg:text-base text-black hover:text-opacity-100 pb-2 transition-all outline-none bg-none mr-6 ${
                  selected
                    ? "font-semibold border-b-black border-b-2"
                    : "text-opacity-60 font-light"
                }`}
              >
                {name}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map(({ value }, index) => (
          <Tab.Panel key={index} className="mt-6">
            {value}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default PostTabs;
