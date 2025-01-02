import Image from "next/image";
import Avatarimg from "@/public/blog-img/avatar.png";

function CategoryName() {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-white">
      {/* Author Section */}
      <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0">
        <Image
          src={Avatarimg}
          alt="avatar img"
          className="object-cover"
          fill
          sizes="(max-width: 640px) 24px, 32px"
        />
      </div>

      <span className="text-xs sm:text-sm text-[#595959]">Bernd Holbein</span>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-xs sm:text-sm text-[#595959]">11 Nov 2024</span>
        <span className="text-xs sm:text-sm text-[#595959]">•</span>
        <span className="text-xs sm:text-sm text-[#595959]">12 mins</span>
      </div>
    </div>
  );
}

export default CategoryName;
