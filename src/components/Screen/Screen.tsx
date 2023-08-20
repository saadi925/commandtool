import useSearch from "../SearchBar/useSearch";
import { AppHeading } from "../heading/AppHeading";
import Searchbar from "../SearchBar/Searchbar";
import BackToTop from "../Backtotop";
import CustomModal from "../searchmodal/SearchModal";
import GridMap from "../gridmapper/GridMap";


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
          {searchQuery && <CustomModal results={filteredCommandsGlobal} />}
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
