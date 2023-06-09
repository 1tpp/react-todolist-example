import React from "react";

type SearchBarProps = {
  filterText: string;
  isOnlyCompleted: boolean;
  setFilterText: (filterText: string) => void;
  setIsOnlyCompleted: (isOnlyCompleted: boolean) => void;
};

export default function SearchBar({
  filterText,
  isOnlyCompleted,
  setFilterText,
  setIsOnlyCompleted,
}: SearchBarProps) {
  return (
    <form className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          checked={isOnlyCompleted}
          onChange={(e) => setIsOnlyCompleted(e.target.checked)}
        />
        <p>Only show completed todos</p>
      </div>
    </form>
  );
}
