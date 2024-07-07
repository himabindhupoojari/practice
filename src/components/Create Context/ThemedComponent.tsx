import React from "react";
import { useTheme } from "./CreateContextFile";

function ThemedComponent() {
  // const { theme, toggleTheme, count, addCount } = useTheme()
  
  // const { theme, toggleTheme, count, addCount } = useTheme() ?? {};

  const { theme, toggleTheme, count, addCount } = useTheme()

  
  return (
    <div>
      <div>Current theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div>Count: {count}</div>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default ThemedComponent;
