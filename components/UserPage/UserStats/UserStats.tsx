import Patrons from "$svg/patrons";
import Stack from "$svg/stack";
import { FC } from "react";
import { StatsProps, UserStatsProps } from "./UserStats.type";

const Stats: FC<StatsProps> = ({ heading, icon, text }) => {
  return (
    <div className="flex items-center">
      {icon}
      <div className="flex flex-col items-start ml-4">
        <h5 className="text-black text-2xl font-semibold mb-1 uppercase">
          {heading}
        </h5>
        <p className="text-black text-opacity-60 text-base font-normal">
          {text}
        </p>
      </div>
    </div>
  );
};
const UserStats: FC<UserStatsProps> = ({ patrons, price }) => {
  return (
    <article className="py-4 px-9 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-center min-h-133px">
      <div className="flex justify-between items-center w-full flex-col lg:flex-row">
        <Stats heading={String(patrons)} icon={<Patrons />} text="Patrons" />
        <div className="my-2 lg:my-0 w-full h-0 lg:w-0 lg:h-24 border-xs border-gray3 border-opacity-50" />
        <Stats
          heading={`${String(price)} matic`}
          icon={<Stack />}
          text="Price"
        />
      </div>
    </article>
  );
};

export default UserStats;
