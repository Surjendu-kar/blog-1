import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";
  
  // Ensure params are available before using them
  const urlPath = Array.isArray(props.params?.page) 
    ? `/${props.params.page.join('/')}` 
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