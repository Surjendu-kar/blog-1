import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const builderModelName = "page";
  
  const resolvedParams = await params;
  const urlPath = Array.isArray(resolvedParams?.page) 
    ? `/${resolvedParams.page.join('/')}` 
    : '/';

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: urlPath,
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}