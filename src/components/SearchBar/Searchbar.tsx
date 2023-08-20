import useSearch from "./useSearch";

const Searchbar = () => {
  const { handleSearchChange,searchQuery } = useSearch();

  return (
    <div>
      <div className="form-control relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-[90%] md:w-auto "
          value={searchQuery}
          onChange={handleSearchChange}
        />
     
      </div>
    </div>
  );
};

export default Searchbar;
