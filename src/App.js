import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
