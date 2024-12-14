// import React from "react";

import { useState } from "react";

interface ListProps {
  data: string[];
  onSelect?: (item: string) => void;
}

function List({ data, onSelect }: ListProps) {
  const [selected, setSelected] = useState<number | null>(null); //hook de estado
  const handleClick = (i: number, item: string) => {
    setSelected(i);
    // console.log(i);
    onSelect?.(item); //si onSelect existe, ejecuta onSelect con el argumento item (?.)
  };
  return (
    <ul>
      {data.map((item, i) => (
        <li
          className={selected === i ? "bg-red-400" : ""}
          onClick={() => handleClick(i, item)}
          key={i}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
