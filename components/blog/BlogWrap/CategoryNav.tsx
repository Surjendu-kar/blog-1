import SearchIcon from "@/public/blog-img/searchIcon.svg";
import FilterIcon from "@/public/blog-img/filterIcon.svg";
import Image from "next/image";

interface CategoryNavProps {
  categories?: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CategoryNav = ({
  categories = [
    "View All",
    "Healthcare trends",
    "AI Insights",
    "Case Studies",
    "Best Practices",
  ],
  searchQuery,
  onSearchChange,
}: CategoryNavProps) => {
  return (
    <nav className="flex items-center justify-between">
      {/* Navigation links */}
      <ul className="flex space-x-6">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className={`text-sm transition-colors duration-200 hover:text-[#00C7BE] ${
                index === 1 ? "text-[#00C7BE]" : "text-[#595959]"
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative flex items-center">
        {/* Search icon */}
        <div className="absolute left-3">
          <Image
            src={SearchIcon}
            alt="Search"
            className="w-4 h-4 cursor-pointer"
          />
        </div>

        {/* Search bar */}
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-12 py-2 rounded-md border border-[#00C7BE] focus:outline-none focus:border-[#00C7BE] w-64"
        />

        {/* Filter icon */}
        <div className="absolute right-3">
          <Image
            src={FilterIcon}
            alt="Filter"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
