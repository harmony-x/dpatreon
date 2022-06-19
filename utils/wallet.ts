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
