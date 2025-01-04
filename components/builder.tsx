"use client";
import { ComponentProps, useEffect, useState } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until after mounting to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }

  return <DefaultErrorPage statusCode={404} />;
}
