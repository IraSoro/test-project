import { useMemo, useState } from "react";
import { ItemType } from "../data/item-type";

function useSort(items: ItemType[]): [ItemType[], string, () => void] {
  const [sortBy, setSortBy] = useState("ASC");

  const sortedItems = useMemo(() => {
    if (sortBy === "DESC") {
      return items.sort((a, b) => b.id - a.id);
    }

    if (sortBy === "ASC") {
      return items.sort((a, b) => a.id - b.id);
    }

    return items;
  }, [items, sortBy]);

  const handleSortClick = () => {
    setSortBy(sortBy === "ASC" ? "DESC" : sortBy === "DESC" ? "ASC" : "");
  };

  return [sortedItems, sortBy, handleSortClick];
}

export default useSort;
