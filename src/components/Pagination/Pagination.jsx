import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const renderPageNumbers = () => {
        const pages = [];
        if(totalPages <= 5){
            for(let i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            pages.push(1);
            if(currentPage > 3){
                pages.push("...");
            }
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for(let i = start; i <= end; i++){
                pages.push(i);
            }
            if(currentPage < totalPages - 2){
                pages.push("...");
            }

            pages.push(totalPages);
        }
        return pages;
    };
    return <>
        <div className="flex justify-center items-center flex-wrap gap-2 my-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50">
                Previous
            </button>

            {renderPageNumbers().map((page, index) =>
                page === "..." ? 
                    <span key={`ellipsis-${index}`} className="px-3 py-1">...</span>:
                    <button
                        key={`page-${page}-${index}`}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 border rounded-full ${currentPage === page ? "bg-main text-white" : "" }`}>
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
