import { createContext } from "react";
type SearchContextValue = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchContext = createContext<null | SearchContextValue>(null);
