import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { MainContent } from "./components/MainConent/MainContent";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
    </div>
  );
};

export default App;
