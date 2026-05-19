function TransactionFilters({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
}) {
  return (
    <div className="filters-bar">

      {/* Search */}
      <div className="filter-input-wrap">
        <span className="filter-input-icon">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search transactions…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ft-search"
        />
      </div>

      {/* Filter */}
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="ft-filter-select"
      >
        <option value="all">All Transactions</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

    </div>
  );
}

export default TransactionFilters;