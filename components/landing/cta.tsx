import React from "react";
import { Button } from "../ui/button";
import { RiGithubFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="px-5 relative">
      <div className=" py-10 ">
        <h1 className="text-3xl sm:text-4xl">Contribute to this project</h1>
        <h1 className="text-3xl sm:text-4xl pt-1">and make the change </h1>
        <Link href={"https://github.com/Prakash1185/GridMantle"} target="_blank"><Button className="rounded-lg cursor-pointer mt-6">View Github<span className="bg-secondary/50 rounded-full p-0.5"><RiGithubFill/></span></Button></Link>
      </div>
      <Image src={"/github.png"} alt="github logo" width={180} height={180} className="dark:invert opacity-5 top-2 absolute sm:top-4 right-0 sm:right-2 scale-75 sm:scale-90"/>
    </div>
  );
};

export default CTA;
