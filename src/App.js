import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Introduction";
import Introduction from "./pages/Introduction";
import Laboratories from "./pages/Laboratories";
import Researchers from "./pages/Researchers";
import Venues from "./pages/Venues";
import System from "./pages/System";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="laboratories" element={<Laboratories/>} />
        <Route path="/researchers" element={<Researchers/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/systems" element={<System/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="/venues" element={<Venues/>} />
        <Route path="*" element={<Introduction/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
