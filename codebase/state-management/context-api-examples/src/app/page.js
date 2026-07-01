"use client";
import React from "react";
import List from "./components/ListV2";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ThemeProvider from "./State/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <h1>Home</h1>

      <ThemeToggleButton />
      <List />
    </ThemeProvider>
  );
};

export default App;
