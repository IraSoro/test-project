import React, { useEffect, useMemo, useState } from "react";
import { ListItem } from "./components";
import useData from "./useData";
import useSort from "./useSort";

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="list-subtitle">Active Item ID: {children}</h2>
);

function ListPage() {
  const items = useData();
  const [sortedItems, sortBy, handleSortClick] = useSort(items);

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const activeItemText = activeItemId ?? "Empty";

  useEffect(() => {
    if (items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query
      .toLowerCase()
      .trim()
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!normalizedQuery) return sortedItems;

    return sortedItems.filter((item) => `${item.id}`.includes(normalizedQuery));
  }, [sortedItems, query]);

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="list-wrapper">
      <div className="list-header">
        <h1 className="list-title">Items List</h1>
        <SubTitle>{activeItemText}</SubTitle>
        <button onClick={handleSortClick}>
          Sort ({sortBy === "ASC" ? "ASC" : "DESC"})
        </button>
        <input
          type="text"
          placeholder="Filter by ID"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div className="list-container">
        <div className="list">
          {loading ? (
            <span>Loading...</span>
          ) : filteredItems.length === 0 ? (
            <span>No items found</span>
          ) : (
            filteredItems.map((item) => (
              <ListItem
                key={item.id}
                isActive={activeItemId === item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                onClick={handleItemClick}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
