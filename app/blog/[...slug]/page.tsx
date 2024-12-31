import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const content = await builder
    .get("blog-post-section", {
      userAttributes: {
        urlPath: "/" + (params?.slug?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model="blog-post-section" />
    </>
  );
}
