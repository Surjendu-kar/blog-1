import Image from "next/image";

interface CategoryNameProps {
  avatarUrl: string;
  author: string;
  date: string;
  readingTime: string;
  tag: string;
}

function CategoryName({
  avatarUrl,
  author,
  date,
  readingTime,
  tag,
}: CategoryNameProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {/* Author Section */}
      <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full sm:h-8 sm:w-8">
        <Image
          src={avatarUrl}
          alt={`${author}'s avatar`}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 24px, 32px"
        />
      </div>

      <span className="text-xs text-[#595959] sm:text-sm">{author}</span>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-xs text-[#595959] sm:text-sm">{date}</span>
        <span className="text-xs text-[#595959] sm:text-sm">•</span>
        <span className="text-xs text-[#595959] sm:text-sm">{readingTime}</span>
        <span className="text-xs text-[#595959] sm:text-sm">{tag}</span>
      </div>
    </div>
  );
}

export default CategoryName;
