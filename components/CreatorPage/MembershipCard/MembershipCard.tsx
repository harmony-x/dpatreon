import Button from "$components/Button/Button";
import JoinModal from "$components/JoinModal/JoinModal";
import { subscriptionContract } from "$utils/contracts";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Image from "next/image";
import { FC, useState } from "react";
import { MembershipCardProps } from "./MembershipCard.types";

const MembershipCard: FC<MembershipCardProps> = ({
  benefits,
  description,
  image,
  price,
  title,
  tierId,
  creator,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { library } = useWeb3React();
  return (
    <article className="min-h-489px px-4 lg:px-8 py-8 flex flex-col items-center bg-white border-xs border-opacity-20 border-gray3 w-full">
      <h3 className="text-lg font-semibold text-black mb-3">{title}</h3>
      <div className="relative w-full h-32 mb-7">
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt={`Showcase image of ${title}`}
          unoptimized
        />
      </div>
      <p className="flex flex-col gap-1 mb-4">
        <span className="font-bold text-black uppercase text-lg md:text-xl">
          {price} MATIC
        </span>
        <span className="text-xs font-medium text-black text-opacity-60">
          PER MONTH
        </span>
      </p>
      <Button
        px="px-10 md:px-12"
        height="h-42px"
        onClick={async () => {
          // await subscriptionContract(library).startSubscribe(creator, tierId, {
          //   value: ethers.utils.parseEther("" + price),
          // });
          setIsOpen(true);
        }}
        text="Join"
        type="card1"
        className=""
      />
      <ul className="mb-2 self-start text-left mt-7">
        {benefits.split("|").map((item, index) => (
          <li
            className="text-sm font-semibold text-black mb-1 flex items-center"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm font-light text-black text-opacity-60 self-start text-left"></p>
      <JoinModal
        amount={price}
        confirm={async () => {
          await subscriptionContract(library).startSubscribe(creator, tierId, {
            value: ethers.utils.parseEther("" + price),
          });
        }}
        creatorAddress={creator}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </article>
  );
};

export default MembershipCard;
