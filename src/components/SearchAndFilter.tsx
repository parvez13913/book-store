const SearchAndFilter = () => {
  return (
    <div>
      <div className="p-4">
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            Select
          </option>
          <option>genre</option>
          <option>publication year</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
