import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./componant/Header";
import Home from "./componant/Home";
import Boutique from "./componant/Boutique";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
      </Routes>
    </div>
  );
}

export default App;
