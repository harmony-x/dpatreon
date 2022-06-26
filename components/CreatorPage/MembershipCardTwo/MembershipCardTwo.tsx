import Button from "$components/Button/Button";
import Image from "next/image";
import { FC } from "react";
import { MembershipCardTwoProps } from "./MembershipCardTwo.types";

const MembershipCardTwo: FC<MembershipCardTwoProps> = ({benefits, description, image, price, title}) => {
  return (
    <article className="min-h-339px px-4 lg:px-6 py-4 flex flex-col items-start bg-white border-xs border-opacity-20 border-gray3 w-full">
      <h3 className="text-base font-semibold text-black mb-1">{title}</h3>
      <p className="mb-4 flex gap-1 items-center">
        <span className="font-bold text-black uppercase text-sm">{price}</span>
        <span className="text-sm font-medium text-black text-opacity-60 uppercase">PER MONTH</span>
      </p>
      <div className="relative w-full h-24 mb-2">
        <Image layout="fill" objectFit="cover" src={'https://res.cloudinary.com/dexg5uy3d/image/upload/v1655585351/Rectangle_204_2_u24cdu.png'} alt={`Showcase image of ${title}`} />
      </div>
      <ul className="mb-2 self-start text-left mt-7">
        {benefits.split('|').map((item, index) => <li className="text-xs font-semibold text-black mb-1 flex items-center" key={index}>{item}</li>)}
      </ul>
      <p className="text-xs font-light text-black text-opacity-60 self-start text-left mb-6">{description}</p>
      <Button px="px-10 md:px-12" height='h-42px' onClick={() => {}} text='Join' type='card2' className="w-full"  />
    </article>
  )
}

export default MembershipCardTwo;