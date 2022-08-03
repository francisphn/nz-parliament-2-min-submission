import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Form from "./pages/Form"
import Header from "./components/Header";
import Preview from "./pages/Preview";
import PostSubmission from "./pages/PostSubmission";

function App() {
  return (
      <>
          <Header/>
          <Router>
              <Routes>
                  <Route path={""} element={<Form/>}/>
                  <Route path={"/preview"} element={<Preview/>}/>
                  <Route path={"/submitted"} element={<PostSubmission/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
