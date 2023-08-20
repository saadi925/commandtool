import useSearch from "./SearchBar/useSearch";
import GridMap from "./gridmapper/GridMap";
import { SubHeading } from "./heading/AppHeading";
interface CommandGroup {
  subheading: string;
  commands: string[];
}
const SearchResults = ({ data }: { data: CommandGroup[] }) => {
  const { searchQuery } = useSearch();
  return (
    <div className="bg-base-10 mt-4 max-h-[60vh] w-full p-4">
      <SubHeading
        className="px-5 py-2 text-white "
        text={`Results for ${searchQuery}`}
      />
      {data.length > 0 ? (
        <GridMap data={data} />
      ) : (
        <div className="p-4 text-center text-gray-500">
          No matching commands found.
        </div>
      )}
    </div>
  );
};

export default SearchResults;
