import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

// handleCategoryChange
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }
  
  return (
    <div className={`App  ${isDarkMode ? "dark" : "light"}`}>
       <Header 
          isDarkMode={isDarkMode} 
          onDarkModeClick={toggleDarkMode} 
          />
         <Filter
          onCategoryChange={handleCategoryChange} 
          />
           <ShoppingList 
           items={itemData} 
           selectedCategory={selectedCategory} 
           />
      
    </div>
  );
}

export default App;
