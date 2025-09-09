import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import {Main} from './pages/main'
import {Login} from './pages/login'
import{Navbar}from"./components/navbar"
import { CreatePost } from './pages/creatingpost/create-post';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path = '/CreatePost' element ={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
