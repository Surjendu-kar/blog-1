import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="flex items-center justify-center gap-4 pt-8">
      {/* Previous page navigation */}
      <span className="text-black">«</span>
      <span className="text-black">‹</span>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === page
                ? "bg-[#00C7BE] text-white"
                : "text-black hover:text-[#00C7BE]"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis for skipped pages */}
        <span className="text-black">...</span>

        {/* Last page number */}
        <button
          onClick={() => setCurrentPage(totalPages)}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-[#00C7BE] text-white"
              : "text-black hover:text-[#00C7BE]"
          }`}
        >
          {totalPages}
        </button>
      </div>

      {/* Next page navigation */}
      <span className="text-black">›</span>
      <span className="text-black">»</span>
    </div>
  );
};

export default Pagination;
