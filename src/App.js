import React from "react";
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body _container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/info" element={<InfoPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
