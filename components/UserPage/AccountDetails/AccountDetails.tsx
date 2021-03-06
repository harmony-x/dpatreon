import Button from "$components/Button/Button";
import Copy from "$svg/copy";
import PolygonMatic from "$svg/polygon_matic";
import { truncateAddress } from "$utils/wallet";
import { useWeb3React } from "@web3-react/core";
import { FC, useState } from "react";
import { AccountDetailsProps } from "./AccountDetails.types";

const AccountDetails: FC<AccountDetailsProps> = ({ walletAddress, link }) => {
  const { library } = useWeb3React();
  const [addressBalance, setAddressBalance] = useState("Fetching...");
  library.getBalance(walletAddress).then((b: number) => {
    setAddressBalance((b / 1e18).toFixed(3).toString());
  });
  return (
    <article className="py-4 bg-white border-xs border-opacity-20 border-gray3 w-full flex flex-col items-stretch min-h-253px">
      <div className="px-7 flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between items-center border-b-xs border-opacity-20 border-gray3 pb-4">
        <div>
          <h2 className="text-lg font-medium text-black mb-1">Account 1</h2>
          <p
            onClick={() => {
              navigator.clipboard.writeText(walletAddress).then(
                function () {
                  alert("Copied!");
                },
                function (err) {
                  console.error("Async: Could not copy text: ", err);
                }
              );
            }}
            className="text-base font-normal text-black text-opacity-60 flex items-center cursor-pointer"
          >
            <span>{truncateAddress(walletAddress)}</span>
            <Copy className="ml-1" />
          </p>
        </div>
        <Button
          height="h-8"
          px="px-3"
          text="View Account on Polygon"
          type="default"
          link={link}
          target="_blank"
        />
      </div>
      <div className="px-7 flex items-center mt-11">
        <PolygonMatic />
        {addressBalance !== "Fetching..." && (
          <h4 className="flex flex-col items-center">
            <span className="ml-3 uppercase font-semibold text-black text-2xl block mb-1">
              {addressBalance} matic
            </span>
            <span className="text-base font-normal text-black text-opacity-60">
              $ {(parseFloat(addressBalance) * 0.56).toFixed(2)} USD
            </span>
          </h4>
        )}
      </div>
    </article>
  );
};

export default AccountDetails;
