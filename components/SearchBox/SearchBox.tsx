import { FC } from "react";
import { SearchBoxProps } from "./SearchBox.types";

const SearchBox : FC<SearchBoxProps> = ({children, height, placeholder, SearchIcon, className, rightSpacing, leftPosition}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center relative mx-auto`}>
      <div className="relative mb-4 md:mb-0">
        <input placeholder={placeholder} className={`${className || ""} ${rightSpacing || "" } ${height}`} />
        {<SearchIcon className={`absolute ${leftPosition} top-1/2 -translate-y-1/2`} width={42}/>}
      </div>
      {children}
    </div>
  )
}

export default SearchBox;