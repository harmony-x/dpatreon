import { FC, Fragment, useRef, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { PostTabsProps } from "./PostTabs.types";

const PostTabs: FC<PostTabsProps> = ({ leftTabPanel, rightTabPanel }) => {

  return (
    <Tab.Group as="div" className="c-tab">
      <Tab.List className='border-opacity-20 border-b-gray3 border-b-xs'>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`text-sm lg:text-base text-black hover:text-opacity-100 pb-2 transition-all outline-none bg-none mr-6 ${selected ? "font-semibold border-b-black border-b-2" : "text-opacity-60 font-light"}`}
            >
              All Posts
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
            className={` text-sm lg:text-base text-black  hover:text-opacity-100 pb-2 transition-all outline-none bg-none ${selected ? "font-semibold border-b-black border-b-2" : "text-opacity-60 font-light"}`}
            >
              Patron posts
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="mt-6">
          {leftTabPanel}
        </Tab.Panel>
        <Tab.Panel className="mt-6">
          {rightTabPanel}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default PostTabs;
