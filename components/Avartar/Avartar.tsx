import { FC } from "react";
import { AvatarProps } from "./Avartar.types";

const Avartar : FC<AvatarProps> = ({sizeClassNames, src}) => {
  return (
    <div className={`${sizeClassNames} border-gray6 border-xs rounded-50% flex items-center justify-center p-1px`}>
      <div className={`w-full h-full bg-cover bg-center rounded-full`} style={{backgroundImage: `url(${src})`}}></div>
    </div>
  )
}

export default Avartar;
