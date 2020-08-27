import React from "react";
import "./App.css";
import AlertHeader from "./components/AlertHeader";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <AlertHeader />
      <Header />
      <Jumbotron />
    </div>
  );
}

export default App;
