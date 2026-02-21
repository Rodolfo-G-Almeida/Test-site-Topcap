"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoClientProps {
  defaultImage: string;
  imageOver?: string;
  alt: string;
  width: number;
  height: number;
}

function LogoClient({ defaultImage, imageOver, alt, width, height}: LogoClientProps) {
  const [imageLoad, setImageLoad] = useState(defaultImage);

  return (
    <Image
      src={imageLoad}
      alt={alt}
      width={width}
      height={height}
      onMouseOver={()=>imageOver ? setImageLoad(imageOver):setImageLoad(defaultImage)}
      onMouseOut={()=>setImageLoad(defaultImage)}
    />
  );
}

export default LogoClient;
