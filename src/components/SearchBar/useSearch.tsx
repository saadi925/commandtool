// SearchBar/useSearch.js
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import gitCommandsList from "../../commands/gitCommands";
import MongoDBCommandsList from "../../commands/mongoCommands";
import linuxCommandsList from "../../commands/LinuxCommands";
type SearchQueryContext = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
const useSearch = () => {
  const { searchQuery, setSearchQuery } = useContext(
    SearchContext
  ) as SearchQueryContext;
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Merge the command lists into a single array
  const commandsArray = [
    ...gitCommandsList,
    ...MongoDBCommandsList,
    ...linuxCommandsList,
  ];

  const filteredCommandsGlobal = commandsArray.filter((command) => {
    const subheading = command.subheading.toLowerCase();
    const seachKeywords = command.searchKeywords.map((keyword) =>
      keyword.toLowerCase()
    );

    const filteredSubheading = subheading.includes(searchQuery.toLowerCase());
    const filteredByKeywords = seachKeywords.some((cmd) =>
      cmd.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredCommands = command.commands.some((cmd) =>
      cmd.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredSubheading || filteredCommands || filteredByKeywords;
  });

  return { filteredCommandsGlobal, searchQuery, handleSearchChange };
};

export default useSearch;
