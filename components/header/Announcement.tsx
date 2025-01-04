"use client";

import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Image from "next/image";

interface AnnouncementData {
  title: string;
}

export default function Announcement() {
  const [announcement, setAnnouncement] = useState<AnnouncementData>({
    title: "",
  });

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

        const builderData = await builder.getAll("announcement-data", {
          cachebust: true,
        });

        const announcementData = builderData.map((item) => ({
          title: item.data?.title || "",
        }))[0];

        setAnnouncement(announcementData);
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchAnnouncement();
  }, []);

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
