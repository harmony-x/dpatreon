import { FC } from "react";
import { AvatarProps } from "./Avartar.types";

const Avartar: FC<AvatarProps> = ({ sizeClassNames, src }) => {
  return (
    <div
      className={`${sizeClassNames} relative border-white border-4 bg-center bg-no-repeat bg-cover rounded-50% flex items-center justify-center`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div
        className={`${sizeClassNames} absolute -left-1  -top-1 rounded-50% border-gray6 border-xs`}
      ></div>
    </div>
  );
};

export default Avartar;
