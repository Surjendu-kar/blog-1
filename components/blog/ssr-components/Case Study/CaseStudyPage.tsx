import React from "react";
import { builder } from "@builder.io/sdk";
import CaseStudyGrid from "./CaseStudyGrid";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function CaseStudyPage() {
  const builderData = await builder.getAll("case-study-card", {
    prerender: false,
  });

  const transformedCards = builderData.map((item) => ({
    image: item.data?.image ?? "",
    tag: item.data?.tag ?? "",
    time: item.data?.time ?? 0,
    title: item.data?.title ?? "",
    description: item.data?.description ?? "",
    link: item.data?.link ?? "#",
  }));

  return <CaseStudyGrid cards={transformedCards} />;
}
