import React from "react";

const Filters = ({ onFilterChange, selectedType, filters }) => {
  const handleFilter = (query: string) => {
    onFilterChange(query);
  };

  return (
    <section>
      <div className="flex gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg transition-colors duration-200 
              ${
                selectedType === f.query
                  ? "bg-black text-white hover:bg-slate-900"
                  : "bg-white text-black hover:bg-slate-200"
              }`}
            onClick={() => handleFilter(f.query)}
            key={f.query}
          >
            {f.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Filters;
