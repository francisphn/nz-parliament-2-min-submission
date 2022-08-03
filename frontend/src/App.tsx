import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Form from "./components/Form"
import Donate from "./components/Donate"
import Faq from "./components/Faq"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="" element={<Form/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="/faq" element={<Faq/>}/>
        </Routes>
      </Router>
  );
}

export default App;
