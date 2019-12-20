import React from "react";
import "./App.css";
import Oppskrifter from "./oppskrift";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Oppskrifter />
      </header>
    </div>
  );
};

export default App;
