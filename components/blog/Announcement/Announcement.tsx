import { builder } from "@builder.io/sdk";
import Image from "next/image";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

async function Announcement() {
  const builderData = await builder.getAll("announcement-data", {
    prerender: false,
  });

  const announcement = builderData.map((item) => ({
    title: item.data?.title || "",
  }))[0];

  return (
    <div className="flex justify-center items-center bg-[#212433] text-white py-1.5 sm:py-2 px-2 sm:px-4">
      <p className="inline-flex items-center text-xs sm:text-sm md:text-md opacity-90 text-center">
        {announcement.title}
        <span className="inline-flex items-center ml-2">
          <Image src="/arrowUp.svg" alt="Arrow Up" width={10} height={10} />
        </span>
      </p>
    </div>
  );
}

export default Announcement;
