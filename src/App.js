import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body _container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/info" element={<InfoPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
