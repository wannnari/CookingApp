import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import Recipi from "./Recipi";
import { fetchRecipes } from "./api";
import Header from "./Header";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Recipi recipes={recipes} />
    </div>
  );
};

export default App;
