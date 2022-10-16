
import React  from 'react';
import './App.css';
//importing components
import Birthday from './Components/Birthday';
import Wedding from './Components/Wedding';
import PageNotFound from './Components/PageNotFound';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="Home" element={<Home/>}></Route>
       <Route path="birthday" element={<Birthday/>}></Route>
       <Route path="wedding" element={<Wedding/>}></Route>
       <Route path="*" element={<PageNotFound/>}></Route>
       <Route path="birth" element={<Birthday/>}></Route>
      </Routes>
    </div>
     
  );
}

export default App;
