import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    let renderPageNumbers = (totalPages) => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }
      
  return <>
      <div className="flex justify-center items-center gap-2 my-6">
          <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
          >
              Previous
          </button>

          {renderPageNumbers(totalPages).map((page) => 
              <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`px-3 py-1 border rounded ${currentPage === page ? "bg-main text-white" : ""}`}>
                  {page}
              </button>
          )}

          <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50">
              Next
          </button>
      </div>
  </>
}
