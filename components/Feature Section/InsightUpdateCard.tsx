"use client";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";
import CustomCard from "../CustomCard/CustomCard";

interface CardData {
  image: string;
  tag: string;
  time: number;
  title: string;
  description: string;
  link: string;
}

export default function InsightUpdateCard() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
      const builderData = await builder.getAll("insight-update-card");

      try {
        const transformedCards = builderData.map((item) => ({
          image: item.data?.image ?? "",
          tag: item.data?.tag ?? "",
          time: item.data?.time ?? 0,
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
          link: item.data?.link ?? "#",
        }));
        setCards(transformedCards);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchCards();
  }, []);

  return (
    <div className="flex gap-4">
      {cards.map((card, index) => (
        <CustomCard key={index} card={card} />
      ))}
    </div>
  );
}
