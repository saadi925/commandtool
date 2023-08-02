import useSearch from "../SearchBar/useSearch";
import { AppHeading } from "../heading/AppHeading";
import GridMap from "../gridmapper/GridMap";
import Searchbar from "../SearchBar/Searchbar";
import SearchResults from "../SearchResults"; // Add the new component
import BackToTop from "../Backtotop";

interface CommandGroup {
  subheading: string;
  commands: string[];
}

type AppScreenProps = { commandList: CommandGroup[]; headingText: string };

const AppScreen = ({ commandList, headingText }: AppScreenProps) => {
  const { filteredCommandsGlobal, searchQuery } = useSearch();

  return (
    <div className="h-[calc(100vh-64px)] px-4 pt-2">
      <Searchbar />
      <BackToTop />

      <div className="flex flex-col   h-full">
        <AppHeading text={headingText} />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Main Command Grid */}
          <div>
            <GridMap data={commandList} />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className=" ">
              <SearchResults data={filteredCommandsGlobal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
