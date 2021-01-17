import React from "react";
import "./App.css";
import Oppskrift from "./Oppskrift";
import {ThemeProvider, CSSReset} from '@chakra-ui/core'
import { BrowserRouter, Route } from 'react-router-dom';
import Oppskrifter from "./Oversikt/Oppskrifter";

const App: React.FC = () => {
  return (
    <ThemeProvider>
    <CSSReset />
    <BrowserRouter>
      <Route exact path="/" component={Oppskrifter} />
      <Route exact path="/Oppskrift/:id" component={Oppskrift} />
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
