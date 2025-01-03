import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
import Image from "next/image";
import Link from "next/link";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

interface BlogData {
  data?: {
    slug: string;
    title: string;
    authorImg: string;
    authorName: string;
    time: number;
    tag: string;
    image: string;
  };
}

interface SectionContent {
  data?: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await builder.getAll("blogs-data", {
    fields: "data.slug",
    options: { noTargeting: true },
  });

  return posts.map((post) => ({
    slug: post.data?.slug || "",
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;

  const [blogData, sectionContent] = await Promise.all([
    builder
      .get("blogs-data", {
        query: {
          "data.slug": resolvedParams.slug,
        },
      })
      .promise() as Promise<BlogData>,

    builder
      .get("new-blog-post-section", {
        query: {
          "data.slug": resolvedParams.slug,
        },
      })
      .promise() as Promise<SectionContent>,
  ]);

  if (!blogData || !sectionContent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* heading */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-5">
          <Link
            href="/mydata"
            className="inline-flex items-center text-[#00C7BE] hover:text-teal-600 mb-2"
          >
            <span className="mr-1">&#60;</span>
            <span>All post</span>
          </Link>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[25px] sm:text-[40px] font-bold  text-black capitalize">
              {blogData.data?.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={blogData.data?.authorImg}
                  alt={blogData.data?.authorName}
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-500"
                />
                <span className="text-gray-700">
                  {blogData.data?.authorName}
                </span>
              </div>
              <span className="text-gray-500">{blogData.data?.time} mins</span>
              <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-sm">
                {blogData.data?.tag}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={blogData.data?.image || ""}
              alt={blogData.data?.title || "Blog featured image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>
      </div>

      <RenderBuilderContent
        content={sectionContent}
        model="new-blog-post-section"
      />
    </div>
  );
}
