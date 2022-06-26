import { connectors } from "connectors";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

const handleClick = async () => {
  // setLoading(true);
  try {
    const web3Modal = new Web3Modal();

    const connection = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const chainId = (await provider.getNetwork()).chainId;
    const user = await signer.getAddress();

    //   if (chainId !== parseInt(selectedNetwork)) {
    //     setError("Please Connect to the selected network");
    //     throw new Error("Please Connect to the selected network");
    //   }

    //   setAppDetails({
    //     address: user,
    //     chainId,
    //   });
  } catch (error) {
    console.log(error);
    //   setLoading(false);
    return;
  }
  // setPressed(true);
  // setTimeout(() => router.push(routeNames.dashboard), 1000);
};

export const truncateAddress = (address: string, long = false) => {
  if (!address) return "No Account";
  const match = address.match(
    long
      ? /^(0x[a-zA-Z0-9]{10})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
      : /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num: number) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const setProvider = (type: string) => {
  window.localStorage.setItem("provider", type);
};

export const refreshCache = async (activate: any) => {
  if (typeof window !== "undefined") {
    const provider = window.localStorage.getItem("provider");
    if (provider && provider in connectors) {
      if(typeof window.ethereum !== 'undefined') return alert("Metamask is not installed")
      await activate(connectors[provider! as "injected"]);
    }
  }
};
