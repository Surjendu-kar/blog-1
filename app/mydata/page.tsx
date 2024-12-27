"use client";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";

interface CardData {
  nav1: string;
  nav2: string;
  nav3: string;
  nav4: string;
}

export default function AnotherPage() {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
      const builderData = await builder.getAll("nav-data");
      console.log("Builder data:", builderData);

      try {
        const transformedCards = builderData.map((item) => ({
          nav1: item.data?.aiConsulting ?? "",
          nav2: item.data?.aiToolbox ?? "",
          nav3: item.data?.contentHealth ?? 0,
          nav4: item.data?.resources ?? "",
        }));

        setData(transformedCards);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchCards();
  }, []);

  return <div className="flex">{JSON.stringify(data)}</div>;
}
