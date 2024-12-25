import { StaticImageData } from "next/image";
import Image from "next/image";

type CardData = {
  image: StaticImageData;
  category: "News" | "Insights" | "Trends";
  readTime: string;
  title: string;
  description: string;
};

const CustomCard: React.FC<CardData> = ({
  image,
  category,
  readTime,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4  rounded-lg bg-white shadow-sm">
      {/* Card Image */}
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image src={image} alt={title} className="object-cover" fill />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 px-4 pb-4">
        {/* Category and Read Time */}
        <div className="flex items-center gap-4">
          <span className="bg-[#00C7BE] text-white text-xs px-3 py-1 rounded-sm">
            {category}
          </span>
          <span className="text-sm text-[#000000]">{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-600">{description}</p>

        {/* Read More Link */}
        <div className="mt-2">
          <a
            href="#"
            className="text-cyan-500 text-sm underline inline-flex items-center"
          >
            Read more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
