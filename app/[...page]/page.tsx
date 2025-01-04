import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { Metadata } from "next";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const resolvedParams = await params;

  const urlPath = Array.isArray(resolvedParams?.page)
    ? `/${resolvedParams.page.join("/")}`
    : "/";

  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: urlPath,
      },
    })
    .toPromise();

  if (!content) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found",
    };
  }

  const pageTitle =
    resolvedParams.page?.[0]?.charAt(0).toUpperCase() +
      resolvedParams.page?.[0]?.slice(1) || "Home";

  const metaData = {
    title: `WeFrame ${pageTitle} Page`,
    description: content.data?.description,
    openGraph: {
      title: `WeFrame ${pageTitle} Page`,
      description:
        content.data?.description ||
        "Explore our collection of blogs, insights, case studies, and FAQs",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `WeFrame ${pageTitle} Page`,
      description:
        content.data?.description ||
        "Explore our collection of blogs, insights, case studies, and FAQs",
    },
  };
  return metaData;
};

export default async function Page({ params }: PageProps) {
  const builderModelName = "page";

  const resolvedParams = await params;
  const urlPath = Array.isArray(resolvedParams?.page)
    ? `/${resolvedParams.page.join("/")}`
    : "/";

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
