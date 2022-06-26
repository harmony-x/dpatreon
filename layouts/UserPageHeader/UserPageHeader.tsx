import Avartar from "$components/Avartar/Avartar";
import SearchBox from "$components/SearchBox/SearchBox";
import UserAvartar from "$svg/user_avartar";
import UserHeaderLogo from "$svg/user_header_logo";
import UserHeaderSearchIcon from "$svg/user_search_header_icon";
import { refreshCache } from "$utils/wallet";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { UserPageHeaderProps } from "./UserPageHeader.types";

const UserPageHeader : FC<UserPageHeaderProps> = ({className}) => {
  const [search, setSearch] = React.useState<string>("");
  const router = useRouter();
  const { active, activate } = useWeb3React();
  refreshCache(activate);

  const handleInputSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <header className={`py-6 lg:py-7 flex flex-col md:flex-row justify-between items-center border-b-xs border-b-gray3 border-opacity-10 ${className || ""}`}>
      <Link href="/feed">
        <a>
          <UserHeaderLogo />
        </a>
      </Link>
      <nav className="flex flex-col md:flex-row items-center mt-3 md:mt-0">
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: '/creators',
          query: {
            name: search
          }
        });
      }}>
        <SearchBox onChange={handleInputSearch} SearchIcon={UserHeaderSearchIcon} height={'h-9'} className='rounded-4.5xl font-light text-gray5 bg-gray4 pl-9 text-xs mr-0 md:mr-6' leftPosition="left-3" placeholder="Find a creator" />
      </form> 
      {active && <Avartar sizeClassNames="h-10 w-10" src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112035/choir1_cdq0wx.jpg" />}
      </nav>
    </header>
  )
}

export default UserPageHeader;