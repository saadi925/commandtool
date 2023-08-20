import React, { useContext } from "react";
import {FaTimes} from"react-icons/fa" ;
import SearchResults from "../SearchResults";
import { SearchContext } from "../../context/searchCont";

type SearchQueryContext = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  }
  type filteredCommandsGlobal= {
    subheading: string;
    commands: string[];
    searchKeywords: string[];
}[]
const CustomModal = ({ results } : {results : filteredCommandsGlobal}) => {
      
        
          const { searchQuery, setSearchQuery } = useContext(
            SearchContext
          ) as SearchQueryContext;
  return (
<div className="absolute right-40 w-[90%] p-4 bg-slate-900  shadow-green-200 shadow-sm overflow-y-auto rounded-lg">
   <SearchResults data={results} />
   {searchQuery &&  <div className="absolute right-20 top-2 cursor-pointer " onClick={()=>setSearchQuery("")}>
          <FaTimes size={25}/>
        </div>}
</div>
  );
};

export default CustomModal;
