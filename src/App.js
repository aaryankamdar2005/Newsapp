import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News  from './components/News';
import './App.css';
import logo from './logo.svg';
import LoadingBar from 'react-top-loading-bar'
const App =() => {
  const pageSize=15;
  const[state,setState]=useState(0)
  const[progress,setProgress]=useState(0)
 
      
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}

      />


          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress}  pageSize={pageSize} key="general"country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress}  pageSize={pageSize} key="business" country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress}  pageSize={pageSize} key="science" country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} key="technology" country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;