import UserAvartar from "$svg/user_avartar";
import router from "next/router";
import { FC } from "react";
import { ProfileCardProps } from "./ProfileCard.types";

const ProfileCard: FC<ProfileCardProps> = ({
  CTAButton,
  creation,
  patrons,
  userName,
  profileLink,
}) => {
  return (
    <article className="px-6 py-5 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-center text-center">
      <UserAvartar
        onClick={() => profileLink && router.push(profileLink)}
        className={`w-16 h-16 ${profileLink && "cursor-pointer"}`}
      />
      <h4
        onClick={() => profileLink && router.push(profileLink)}
        className={`text-black text-sm md:text-base font-semibold not-italic mt-1 ${
          profileLink && "cursor-pointer"
        }`}
      >
        {userName}
      </h4>
      <p className="text-black text-opacity-60 text-sm font-light mb-1">
        is creating {creation}
      </p>
      <div className="mb-6 text-center">
        <p className=" text-black text-base md:text-lg font-bold">{patrons}</p>
        <p className="text-black text-opacity-40 text-xxs uppercase font-medium">
          patrons
        </p>
      </div>
      {CTAButton}
    </article>
  );
};

export default ProfileCard;
