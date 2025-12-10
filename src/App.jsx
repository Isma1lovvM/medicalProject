import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
