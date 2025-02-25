import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from './pages/Search'
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search"element={<SearchPage />} >
          <Route path="/searchpage" element={<SearchPage/>} />
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
