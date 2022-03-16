import React from "react";
import "./App.css";
import { Route, Router, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Completed from "./Components/Modal/Completed";
import TransactionCompleted from "./Routes/TransactionCompleted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<TransactionCompleted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
