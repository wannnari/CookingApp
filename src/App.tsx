import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import Recipi from "./Recipi";
import { fetchRecipes } from "./api";
import Header from "./Header";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchData =() =>{
      setTimeout(() =>{
console.log("4秒経過");
      setLoading(false);
      },4000);

    };
    fetchData();
  },[]);

  const handleSearch = async (query: string) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="container mx-auto">
      <Header />
      {loading?(
        <p className="loader">ロード中。。。</p>
      ): (
        <>
      <SearchBar onSearch={handleSearch} />
      <Recipi recipes={recipes} />
        </>
      )}

    </div>
  );
};

export default App;
