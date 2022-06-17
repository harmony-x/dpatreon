import UserAvartar from "$svg/user_avartar";
import { FC } from "react";
import { ProfileCardProps } from "./ProfileCard.types";

const ProfileCard : FC<ProfileCardProps> = ({CTAButton, creation, patrons, userName}) => {
  return (
    <article className="px-6 py-5 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-center">
      <UserAvartar className="w-14 h-14" />
      <h4 className="font-Gilroy text-black text-sm md:text-base font-semibold not-italic mt-1">{userName}</h4>
      <p className="text-black text-opacity-40 text-sm md:text-base mb-6">is creating {creation}</p>
      <div className="mb-6 text-center">
        <p className="mb-1 text-black text-base md:text-lg">{patrons}</p>
        <p className="text-black text-opacity-40 text-xxs uppercase font-medium">patrons</p>
      </div>
      {CTAButton}
    </article>
  )
}

export default ProfileCard;