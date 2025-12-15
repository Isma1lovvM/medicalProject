import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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
