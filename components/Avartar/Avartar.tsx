import { FC } from "react";
import { AvatarProps } from "./Avartar.types";

const Avartar : FC<AvatarProps> = ({sizeClassNames, src}) => {
  return (
    <div className={`${sizeClassNames} border-gray6 border-xs rounded-50% flex items-center justify-center`}>
      <div className={`${sizeClassNames} bg-cover bg-center rounded-50%`} style={{backgroundImage: `url(${src})`}}></div>
    </div>
  )
}

export default Avartar;
