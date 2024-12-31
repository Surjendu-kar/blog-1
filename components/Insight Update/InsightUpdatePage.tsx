import React from "react";
import { builder } from "@builder.io/sdk";
import InsightUpdateGrid from "./InsightUpdateGrid";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function InsightUpdatePage() {
  const builderData = await builder.getAll("insight-update-card", {
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

  return <InsightUpdateGrid cards={transformedCards} />;
}
