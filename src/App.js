import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./componant/Header";
import Home from "./componant/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
