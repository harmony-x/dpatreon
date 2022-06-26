import Button from "$components/Button/Button";
import LandingPageLogo from "$svg/landing_page_logo";
import UserFooterLogo from "$svg/user_footer_logo";
import { refreshCache, truncateAddress } from "$utils/wallet";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import router from "next/router";
import { Dispatch, FC, SetStateAction } from "react";

interface LandingPageHeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LandingPageHeader: FC<LandingPageHeaderProps> = ({ setIsOpen }) => {
  const { account, active, activate } = useWeb3React();
  refreshCache(activate);
  return (
    <header className="py-6 lg:py-9 flex flex-col md:flex-row justify-between items-center">
      <Link href="/">
        <a>
          <UserFooterLogo />
        </a>
      </Link>
      <nav className="flex items-center mt-3 md:mt-0">
        <Link href="/">
          <a
            onClick={() => {
              !active
                ? alert("Connect your wallet first")
                : router.push(`/creator/${account}`);
            }}
            className="font-medium text-center text-base md:text-lg text-black text-opacity-90 mr-4 md:mr-14 h"
          >
            Create a Content
          </a>
        </Link>
        {active ? (
          <Button
            px="px-4 md:px-6"
            height="h-12 md:h-55px"
            text={truncateAddress(account!)}
            type="primary"
          />
        ) : (
          <Button
            px="px-4 md:px-6"
            height="h-12 md:h-55px"
            onClick={() => {
              setIsOpen(true);
            }}
            text="Connect Wallet"
            type="primary"
          />
        )}
      </nav>
    </header>
  );
};

export default LandingPageHeader;
