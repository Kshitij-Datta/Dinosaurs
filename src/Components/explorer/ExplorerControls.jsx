import { Search, ArrowUpDown } from "lucide-react";

export default function ExplorerControls({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  sortOrder,
  toggleSort,
}) {
  return (
    <div className="explorer-controls">
      <div className="search-container">
        <Search className="search-icon" size={20} />

        <input
          type="text"
          value={searchQuery}
          placeholder="Search dinosaur..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="sort-controls">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select-input"
        >
          <option value="default">Sort by Default</option>
          <option value="name">Sort by Name</option>
          <option value="originalIndex">Sort by ID</option>
          <option value="period">Sort by Period</option>
        </select>

        <button onClick={toggleSort} className="btn-icon">
          <ArrowUpDown size={20} />
          {sortOrder}
        </button>
      </div>
    </div>
  );
}
