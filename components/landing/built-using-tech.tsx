import React from "react";
import Image from "next/image";

const BuiltUsingTech = () => {
  return (
    <div className="px-5">
      {/* Technologies listed */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Next.js */}
        <div className="flex items-center justify-center h-20 sm:h-24  md:h-28 border-r border-b lg:border-b-0 border-dashed">
          <Image
            src={"/next.png"}
            alt="nextjs logo"
            width={150}
            height={150}
            className="invert-0 dark:invert object-contain"
          />
        </div>

        {/* Shadcn */}
        <div className="flex items-center justify-center h-20 sm:h-24  md:h-28 border-b lg:border-b-0 lg:border-r border-dashed">
          <Image
            src={"/shadcn.png"}
            alt="shadcn logo"
            width={150}
            height={150}
            className="invert-0 dark:invert object-contain"
          />
        </div>

        {/* Tailwind */}
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28  border-r border-dashed">
          <Image
            src={"/tailwind.png"}
            alt="tailwind logo"
            width={150}
            height={150}
            className="block dark:hidden object-contain"
          />
          <Image
            src={"/tailwindw.png"}
            alt="tailwind logo dark"
            width={150}
            height={150}
            className="hidden dark:block object-contain"
          />
        </div>

        {/* Vercel */}
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 ">
          <Image
            src={"/vercelimg.png"}
            alt="vercel logo"
            width={150}
            height={150}
            className="object-contain dark:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default BuiltUsingTech;