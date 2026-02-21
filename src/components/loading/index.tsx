import Image from "next/image";

function Loading() {
  return <Image src={"/assets/images/loading.svg"} alt="loading" width={60} height={60} />;
}

export default Loading;
