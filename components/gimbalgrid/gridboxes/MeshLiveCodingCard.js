import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MeshLiveCodingCard() {
  return (
    <Link href="https://youtube.com/playlist?list=PLCCIAmutGEbd5V3deH6wE1C_yMePvqsGy&si=kMYD1HgY8Zn1ZGAU">
      <div className="">
        <Image src="/mesh-live-coding.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}


