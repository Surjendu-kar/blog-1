type CategoryNavProps = {
  categories?: string[];
};

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories = [
    "View All",
    "Healthcare trends",
    "AI Insights",
    "Case Studies",
    "Best Practices",
  ],
}) => {
  return (
    <nav className="flex items-center justify-between border-b px-4">
      <ul className="flex space-x-6">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className={`text-sm ${
                index === 0 ? "text-gray-600" : "text-blue-500"
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg"
        />
      </div>
    </nav>
  );
};

export default CategoryNav;
