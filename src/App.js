import React from "react";
import GlobalStyles from './components/GlobalStyle';
import Home from "./pages/Home";
import Nav from './components/Nav';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
