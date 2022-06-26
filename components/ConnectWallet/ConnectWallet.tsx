import ChoiceCard from "$components/ChoiceCard/ChoiceCard";
import Modal from "$components/Modal/Modal";
import { networkOptions, walletOptions } from "$utils/data";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../connectors";
import { FC, useState } from "react";
import { ConnectWalletProps } from "./ConnectWallet.types";
import { setProvider } from "$utils/wallet";

const ConnectWallet: FC<ConnectWalletProps> = ({ isOpen, setIsOpen }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const { activate, chainId, deactivate } = useWeb3React();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Connect your wallet">
      <section className="font-Montserrat">
        <h2 className="text-black text-xl md:text-3xl font-semibold not-italic mb-1">
          Connect your wallet
        </h2>
        <p className="text-black text-opacity-60 text-base md:text-lg lg:text-xl mb-12">
          Select what network and wallet you want to connect{" "}
        </p>
        <h3 className="mb-4 text-lg md:text-xl text-black font-semibold">
          Choose Network
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          {networkOptions.map(({ icon, title, disabled }, index) => (
            <ChoiceCard
              icon={icon}
              title={title}
              disabled={disabled}
              selected={selectedNetwork.title === title}
              key={index}
              onClick={() => {
                setSelectedNetwork(networkOptions[index]);
              }}
            />
          ))}
        </div>
        <h3 className="mb-4 text-lg md:text-xl text-black font-semibold mt-16">
          Choose Wallet
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          {walletOptions.map(({ icon, title, disabled }, index) => (
            <ChoiceCard
              icon={icon}
              title={title}
              disabled={disabled}
              key={index}
              onClick={async () => {
                if (typeof window.ethereum !== "undefined")
                  return alert("Metamask is not installed");
                await activate(connectors.injected);
                if (typeof chainId !== "undefined" && chainId !== 80001) {
                  deactivate();
                  return alert("You must be connected to the Polygon Testnet");
                }
                setProvider("injected");
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      </section>
    </Modal>
  );
};

export default ConnectWallet;
