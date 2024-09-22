import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
      // Add first few pages
      if (
        i <= maxVisiblePages ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      }
      // Add ellipsis if necessary
      else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        className={`px-2 py-1 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white transition ${
          currentPage === page
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700"
        }`}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        disabled={page === "..."}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-10">
      <button
        className={`px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Prev
      </button>

      {renderPageNumbers()}

      <button
        className={`px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
