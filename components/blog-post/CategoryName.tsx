import Image from "next/image";
import Avatarimg from "@/public/blog-img/avatar.png";
function CategoryName() {
  return (
    <div className="flex items-center gap-2 bg-white">
      {/* Author Section */}
      <div className="relative w-8 h-8 rounded-full overflow-hidden">
        <Image src={Avatarimg} alt="avatar img" className="object-cover" fill />
      </div>

      <span className="text-sm text-[#595959]"> Bernd Holbein</span>

      <span className="text-sm text-[#595959]">11 Nov 2024</span>

      <span className="text-sm text-[#595959]">12 mins</span>
    </div>
  );
}

export default CategoryName;
