import React from "react";

const SORTINGS = [
  {
    text: "A-Z",
    value: "a-z",
  },
  {
    text: "Cena opadajuca",
    value: "highest-price",
  },
  {
    text: "Cena rastuca",
    value: "lowest-price",
  },
];

const Sorting = ({ onSortChange, selectedSort }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSortChange(selectedValue);
  };

  return (
    <section>
      <select
        className="text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
        value={selectedSort}
      >
        {SORTINGS.map((s, i) => (
          <option value={s.value} key={i}>
            {s.text}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Sorting;
