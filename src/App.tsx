import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import { SearchTerm } from "./interfaces/search.interface";

function App() {
  const [searchTerm, setSearchTerms] = useState<SearchTerm>();
  return (
    <div className="vh-100 bg-dark">
      <div className="container-md pt-5">
        <HeaderComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerms}
        />
      </div>
    </div>
  );
}

export default App;
