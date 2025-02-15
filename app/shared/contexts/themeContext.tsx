import React, { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  getTheme: () => "light" | "dark";
  handleUpdateTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  getTheme: () => "light",
  handleUpdateTheme: () => {},
});

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("theme") as
      | "light"
      | "dark";
    const container = document.getElementById("webPage");

    if (!themeFromLocalStorage) {
      container?.setAttribute("data-theme", "dark");
      return;
    }

    container?.setAttribute("data-theme", themeFromLocalStorage);
    localStorage.setItem("theme", themeFromLocalStorage);
    setTheme(themeFromLocalStorage);
  }, []);

  function getTheme(): "light" | "dark" {
    return theme;
  }

  function handleUpdateTheme() {
    const container = document.getElementById("webPage");
    const targetTheme = getTheme() === "dark" ? "light" : "dark";
    container?.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
    setTheme(targetTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        getTheme,
        handleUpdateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
