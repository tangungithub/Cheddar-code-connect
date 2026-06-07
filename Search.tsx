function Search({ placeholder = "Search anything", value = "", onChange }) {
  return (
    <div className="search">
      <span className="search__icon">🔍</span>
      <input className="search__input" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default Search;
