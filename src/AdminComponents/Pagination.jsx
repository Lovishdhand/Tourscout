import { useSearchParams } from "react-router-dom";

import { SearchContext } from "../Pages/Search";
import { useContext } from "react";

function Pagination({ totalPages }) {
  const { filters, setFilters } = useContext(SearchContext);


  return (
    <div>
      {Array.from({ length: totalPages }, (x, i) => (
        <button
          key={i + 1}
          onClick={() => 
   setFilters({...filters,page:i+1})
         
          }
          style={{
            margin: "4px",
            fontWeight: filters.page === i + 1 ? "bold" : "normal",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination;