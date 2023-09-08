import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
      <Filter onCategoryChange={onCategoryChange} />
    </div>
  );
}

export default App;

