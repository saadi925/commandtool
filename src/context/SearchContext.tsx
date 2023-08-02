// SearchContext.js
import React, { useState } from "react";
import { SearchContext } from "./searchCont";
const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
