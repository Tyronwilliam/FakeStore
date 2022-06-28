import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./componant/Header";
import Home from "./componant/Home";
import Boutique from "./componant/Boutique";
import Loader from "./componant/Loader";
import { useEffect, useState } from "react";
import CheckOut from "./componant/CheckOut";
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
