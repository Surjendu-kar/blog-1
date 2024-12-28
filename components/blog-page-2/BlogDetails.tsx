import Image from "next/image";
import { FC } from "react";

interface BlogDetailProps {
  title?: string;
  content?: string;
  image?: string;
  secondParagraph?: string;
  bulletPoints?: { point: string }[];
  conclusion?: string;
}

const BlogDetail: FC<BlogDetailProps> = ({
  title,
  content,
  image,
  secondParagraph,
  bulletPoints = [],
  conclusion,
}) => {
  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <article className="container">
      {/* Title */}
      <h1 className="text-[35px] font-bold mb-6 text-[#000000] capitalize">
        {title}
      </h1>

      {/* Main content */}
      <p className="text-[#595959] mb-8 opacity-80">{content}</p>

      {/* Featured Image */}
      {image && (
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={image}
            alt={title || ""}
            className="object-cover"
            fill
            sizes="(max-width: 896px) 100vw"
            unoptimized={isExternalUrl(image)}
            loader={
              isExternalUrl(image)
                ? ({ src }: { src: string }) => src
                : undefined
            }
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.jpg";
            }}
          />
        </div>
      )}

      {/* Second paragraph */}
      <p className="text-[#595959] mb-8 opacity-80">{secondParagraph}</p>

      {/* Bullet points */}
      {bulletPoints.length > 0 && (
        <ul className="list-disc list-inside mb-8 space-y-3 bg-[#F1F1F3] p-5 rounded-xl">
          {bulletPoints.map((item, index) => (
            <li key={index} className="text-[#000000]">
              {item.point}
            </li>
          ))}
        </ul>
      )}

      {/* Conclusion */}
      <p className="text-[#595959] opacity-80">{conclusion}</p>
    </article>
  );
};

export default BlogDetail;
