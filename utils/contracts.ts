import { PatreonThreeSubscription__factory, Patreon__factory } from "typechain-types";

export const patreonContract = (provider: any) => {
  const signer = provider.getSigner();
  return Patreon__factory.connect("0x130e0E97Ce327d8493A8C78DecE900F1c454C42d", signer)
};


export const subscriptionContract = (provider: any) => {
  const signer = provider.getSigner();
  return PatreonThreeSubscription__factory.connect("0xeB273128a8A5F8a01756ec2ec11178eB2696d19C", signer)
};