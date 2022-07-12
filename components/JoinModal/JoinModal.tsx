import Modal from "$components/Modal/Modal";
import { useWeb3React } from "@web3-react/core";
import { FC } from "react";
import { JoinModalProps } from "./JoinModal.types";
import { truncateAddress } from "$utils/wallet";
import PolygonM from "$svg/polygon_m";
import ArrowDown from "$svg/arrow_down";
import UserAvartar from "$svg/user_avartar";
import Bookmark from "$svg/bookmark";
import JoinLogo from "$svg/join_logo";

const JoinModal: FC<JoinModalProps> = ({
  isOpen,
  setIsOpen,
  amount,
  confirm,
}) => {
  const { account } = useWeb3React();

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Join Subscription"
      modalClassName="w-11/12 max-w-464px pt-5 pb-10"
      showCloseButton={false}
    >
      <section className="">
        <div className="pb-5 border-b-xxs border-gray3 border-opacity-50 flex justify-between items-center px-9">
          <div className="flex gap-2 items-center">
            <UserAvartar />
            <p className="text-black text-opacity-60 text-base font-medium">
              {truncateAddress(account!)}
            </p>
          </div>
          <div className="flex h-8 py-2 px-3 rounded-4.5xl border-xs border-gray9 items-center text-xs font-light text-gray8 text-opacity-60 mr-0 md:mr-4 mb-3 md:mb-0">
            <PolygonM /> <span className="inline-block mx-1">Polygon</span>{" "}
            <ArrowDown />
          </div>
        </div>
        <div className="pt-5 pb-12 border-b-xs border-gray3 border-opacity-50 flex flex-col items-center">
          <JoinLogo />
          <p className="text-2xl font-normal text-black mt-6 text-center">
            Allow <span className="font-semibold">DPatreon</span> to spend{" "}
            <br /> your MATIC?
          </p>
        </div>
        <div className="flex justify-between gap-1 sm:gap-0 sm:items-center flex-col items-start sm:flex-row px-9 pt-6 pb-10 border-b-xs border-gray3 border-opacity-50">
          <div>
            <p className="text-lg font-semibold text-black mb-1 flex items-center">
              <Bookmark className="mr-2" />
              <span>Transaction Fee</span>
            </p>
            <p className="text-sm text-black text-opacity-60 font-medium">
              A fee is associated with this <br className="hidden sm:block" />{" "}
              request
            </p>
          </div>
          <div className="flex flex-col items-end text-lg font-semibold text-black">
            <p className="text-lg font-semibold text-black">{amount} MATIC</p>
            {/* <p className="text-sm text-black text-opacity-60 font-normal">
              3 USD
            </p> */}
          </div>
        </div>
        <div className="flex gap-3 pt-8 px-11">
          <button
            className="w-1/2 h-42px rounded-lg bg-gray10 text-sm text-black text-opacity-60 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Reject
          </button>
          <button
            onClick={confirm}
            className="w-1/2 h-42px rounded-lg text-white bg-confirm text-sm font-bold"
          >
            Confirm
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default JoinModal;
