import Image from "next/image";
import Avatarimg from "@/public/blog-img/avatar.png";
function CategoryName() {
  return (
    <div className="flex flex-col  gap-2 bg-[#F1F1F3]">
      <div>
        <p className="text-[#000000]">
          Unlocking AI’s potential in AI Healthcare
        </p>
        <p className="text-[#595959]">
          Our Ai Hackathons are intensive, collaborative sessions that spark
          Innovation
        </p>
      </div>
      {/* Author Section */}
      <div className="relative w-8 h-8 rounded-full overflow-hidden">
        <Image src={Avatarimg} alt="avatar img" className="object-cover" fill />
      </div>

      <span className="text-sm text-[#595959]"> Bernd Holbein</span>

      <span className="px-3 py-1 bg-teal-400 text-white text-xs rounded-full">
        Insights
      </span>

      <span className="text-sm text-[#595959]">12 mins</span>
    </div>
  );
}

export default CategoryName;
