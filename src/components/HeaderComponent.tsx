import React from "react";
import { HeaderProps } from "../interfaces/search.interface";

const HeaderComponent: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <header>
      <form className="w-50 mx-auto">
        <div className="form-group">
          <input
            className="form-control text-center fst-italic"
            type="text"
            placeholder="Search a Gif"
            value={searchTerm}
            onChange={(e) => {
              e.preventDefault();
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </header>
  );
};

export default HeaderComponent;
