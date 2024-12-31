import { type CardType } from "./BlogWrap";

interface CategoryNavProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentCategory: CardType;
  onCategoryChange: (category: CardType) => void;
}

const CategoryNav = ({
  searchQuery,
  onSearchChange,
  currentCategory,
  onCategoryChange,
}: CategoryNavProps) => {
  const categories: { id: CardType; label: string }[] = [
    { id: "blog-post-card", label: "View All" },
    { id: "insight-update-card", label: "Insight & Updates" },
    { id: "case-study-card", label: "Case Study" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className={`text-sm transition-colors duration-200 hover:text-[#00C7BE] ${
              currentCategory === category.id
                ? "text-[#00C7BE]"
                : "text-gray-600"
            }`}
            onClick={(e) => {
              e.preventDefault();
              onCategoryChange(category.id);
            }}
          >
            {category.label}
          </a>
        ))}
      </div>

      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00C7BE]"
        />
        <svg
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategoryNav;
