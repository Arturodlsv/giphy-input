import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import { SearchTerm } from "./interfaces/search.interface";
import GiphyContainer from "./components/GiphyContainer";

function App() {
  const [searchTerm, setSearchTerms] = useState<SearchTerm>();
  return (
    <div className="vh-100 bg-dark">
      <div className="container-md pt-5">
        <HeaderComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerms}
        />
        <main>
          <GiphyContainer term={searchTerm} />
        </main>
      </div>
    </div>
  );
}

export default App;
