import React, { useState } from "react";

const ResearchRecipe = () => {
  const [inputWord, setInputWord] = useState<string>("");

  //検索処理
  const handleSearchWord = () => {
    console.log(inputWord);
  };

  return (
    <div>
      <input value={inputWord} onChange={(e) => setInputWord(e.target.value)} />
      <button
        onClick={() => {
          handleSearchWord();
        }}
      >
        検索
      </button>
    </div>
  );
};

export default ResearchRecipe;
