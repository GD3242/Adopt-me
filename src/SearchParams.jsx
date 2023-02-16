const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div className="searchParams">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
