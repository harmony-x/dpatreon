import { FC } from "react";
import { MustConnectProps } from "./MustConnect.types";
import { useWeb3React } from "@web3-react/core";
import Button from "$components/Button/Button";
import { connectors } from "connectors";
import { refreshCache } from "$utils/wallet";

const MustConnect: FC<MustConnectProps> = ({ children }) => {
  const { chainId, activate, deactivate, active } = useWeb3React();
  refreshCache(activate);
  return active ? (
    <>{children}</>
  ) : (
    <div className="w-full border-xs border-gray3 border-opacity-30 py-8 px-4 md:px-8 mt-9 mx-auto flex flex-col items-center">
      <div className="my-9">You need to connect your wallet first</div>
      <Button
        px="px-4 md:px-6"
        height="h-12 md:h-55px"
        onClick={async () => {
          if (typeof window.ethereum !== "undefined")
            return alert("Metamask is not installed");
          await activate(connectors.injected);
          if (typeof chainId !== "undefined" && chainId !== 80001) {
            deactivate();
            return alert("You must be connected to the Polygon Testnet");
          }
        }}
        text="Connect Wallet"
        type="primary"
      />
    </div>
  );
};

export default MustConnect;
