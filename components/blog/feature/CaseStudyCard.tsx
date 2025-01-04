"use client";
import { FC, useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import CardContainer from "../customCard/CardContainer";
import { CardData } from "../customCard";

const CaseStudyCard: FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      setIsLoading(true);
      try {
        builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
        const builderData = await builder.getAll("case-study-data");

        const transformedCards = builderData.map((item) => ({
          image: item.data?.image ?? "",
          tag: item.data?.tag ?? "",
          time: item.data?.time ?? 0,
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
          link: item.data?.link ?? "#",
        }));

        setCards(transformedCards);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch cards");
        console.error("Error fetching cards:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCards();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!cards.length) return null;

  return <CardContainer cards={cards} cardType="case-study" />;
};

export default CaseStudyCard;
