import { PatreonThreeSubscription__factory, Patreon__factory } from "typechain-types";

export const patreonContract = (provider: any) => {
  const signer = provider.getSigner();
  return Patreon__factory.connect("0x130e0E97Ce327d8493A8C78DecE900F1c454C42d", signer)
};


export const subscriptionContract = (provider: any) => {
  const signer = provider.getSigner();
  return PatreonThreeSubscription__factory.connect("0x90baD916F53d7388aC82e772e5cb7b54eADe6EE7", signer)
};