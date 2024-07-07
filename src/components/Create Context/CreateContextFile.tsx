import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  count: number;
  addCount: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  count: 0,
  addCount: () => {},
});

// export const useTheme = () => useContext(ThemeContext);
export const useTheme = (): ThemeContextType => useContext(ThemeContext); // Explicitly define the return type

// Define the props for ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode; // Define the children prop
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [count, setCount] = useState<number>(0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addCount = () => {
    setCount((prevTheme) => prevTheme + 1);
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    count,
    addCount,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
