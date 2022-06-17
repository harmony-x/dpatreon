import Image from "next/image";

export default function EmptyPostImage(): JSX.Element {
  return (
    <Image width={407} height={207} src={'https://res.cloudinary.com/dexg5uy3d/image/upload/f_auto,w_407,c_scale/v1655400925/empty-post_vymkfq.png'} alt="No post available" />
  );
}