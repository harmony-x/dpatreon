import ChoiceCard from "$components/ChoiceCard/ChoiceCard";
import Modal from "$components/Modal/Modal";
import { networkOptions, walletOptions } from "$utils/data";
import { FC } from "react";
import { ConnectWalletProps } from "./ConnectWallet.types";

const ConnectWallet : FC<ConnectWalletProps> = ({isOpen, setIsOpen}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Connect your wallet">
      <section className="font-Montserrat">
        <h2 className="text-black text-xl md:text-3xl font-semibold not-italic mb-1">Connect your wallet</h2>
        <p className="text-black opacity-60 text-base md:text-lg lg:text-xl mb-12">Select what network and wallet you want to connect </p>
        <h3 className="mb-4 text-lg md:text-xl text-black font-semibold">Choose Network</h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          {networkOptions.map(({icon, title, disabled}, index) => (
            <ChoiceCard icon={icon} title={title} disabled={disabled} key={index} />
          ))}
        </div>
        <h3 className="mb-4 text-lg md:text-xl text-black font-semibold mt-16">Choose Wallet</h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          {walletOptions.map(({icon, title, disabled}, index) => (
            <ChoiceCard icon={icon} title={title} disabled={disabled} key={index} />
          ))}
        </div>
      </section>
    </Modal>
  )
}

export default ConnectWallet;