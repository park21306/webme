import NavBar from "./components/NavBar";
import About from "./components/About";
import Cer from "./components/Cer";
import Project from "./components/Project";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/About" element={<Navigate to="/" />}></Route>
        <Route path="/Cer" element={<Cer />}></Route>
        <Route path="https://park21306.github.io/Project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
