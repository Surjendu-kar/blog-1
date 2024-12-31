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
    <div className="flex justify-center items-center bg-[#212433] text-white  gap-1 py-2 ">
      <p className="text-md opacity-90">{announcement.title}</p>
      <Image
        src="/arrowUp.svg"
        alt="Arrow Up"
        className="w-3 h-3"
        width={3}
        height={3}
      />
    </div>
  );
}

export default Announcement;
