import { Menu, Transition } from "@headlessui/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { forwardRef, Fragment, MutableRefObject } from "react";
import { MenuDropdownProps } from "./MenuDropdown.types";

const CustomLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & {
    active: boolean;
    children: React.ReactNode;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  let { href, children, active, className, ...rest } = props;
  return (
    <Link href={href}>
      <a
        className={`${
          active ? "text-primary font-semibold" : "text-black font-normal"
        } text-sm transition-colors hover:text-primary`}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
});

const MenuDropdown: React.FC<MenuDropdownProps> = ({ button, links }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Menu className="relative z-50" as="div">
      <Menu.Button>{button}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute origin-top-right right-0 mt-2 w-44 shadow-dropdown-shadow bg-white px-3 flex flex-col gap-4 pt-5 pb-9">
          {links.map(({ text, href }, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <CustomLink active={href.includes(router.asPath)} href={href}>
                  {<>{text}</>}
                </CustomLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
