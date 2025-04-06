import React from "react";
import "./Header.css"; // CSSファイルをインポート

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>料理レシピ検索アプリ</h1>
      <nav className="nav">
        <a href="/app">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
