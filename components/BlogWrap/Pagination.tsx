interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-4 pt-8">
      {/* Previous page navigation */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`text-black ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:text-[#00C7BE]"
        }`}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="text-black px-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentPage === page
                  ? "bg-[#00C7BE] text-white"
                  : "text-black hover:text-[#00C7BE]"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next page navigation */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className={`text-black ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:text-[#00C7BE]"
        }`}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
