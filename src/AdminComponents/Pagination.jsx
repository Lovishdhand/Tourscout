import { useSearchParams } from "react-router-dom";

function Pagination({ totalPages }) {
    console.log(totalPages);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setSearchParams({ page: i + 1 })}
          style={{
            margin: "4px",
            fontWeight: currentPage === i + 1 ? "bold" : "normal",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination;