import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css'
import Viewdata from './component/Viewdata';
import Editdata from './component/Editdata';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/viewdata/:id" element={<Viewdata />} />
          <Route exact path="/editdata/:id" element={<Editdata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


  // http://localhost:3333/students
  //json-server --watch db.json --port 3333