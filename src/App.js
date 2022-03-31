import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body _container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
