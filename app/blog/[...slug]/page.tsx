import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const content = await builder
    .get("blog-post-section", {
      userAttributes: {
        urlPath: "/" + (slug?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={"blog-post-section"} />
    </>
  );
}

