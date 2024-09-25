import React, { useState } from "react";
import "./Demo.scss";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`theme-container ${theme}`}>
      <button onClick={toggleTheme} className="toggle__btn">
        Switch to {theme === "dark" ? "light" : "dark"} Theme
      </button>

      <h2 className="heading">Heading</h2>      
    </div>
  );
};

export default ThemeSwitcher;
