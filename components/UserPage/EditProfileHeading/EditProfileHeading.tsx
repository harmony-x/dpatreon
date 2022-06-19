import React from "react";
import { EditProfileHeadingProps } from "./EditProfileHeading.types";

export const EditProfileHeading : React.FC<EditProfileHeadingProps> = ({description, title}) => (
  <div className="my-8 text-center">
    <h1 className="text-black font-semibold text-lg md:text-2xl lg:text-3xl mb-1">{title}</h1>
    <p className="text-black text-opacity-60 font-light text-base md:text-lg">{description}</p>
  </div>
)