import { useState } from "react";
import { SearchTerm } from "../interfaces/search.interface";

function HeaderComponent() {
  const [searchTerm, setSearchTerms] = useState<SearchTerm>();

  return (
    <header>
      <form className="w-50 mx-auto">
        <div className="form-group">
          <input
            className="form-control text-center text-capitalize"
            type="text"
            placeholder="Search a Gif"
          />
        </div>
      </form>
    </header>
  );
}

export default HeaderComponent;
