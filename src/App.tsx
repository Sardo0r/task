import React, { createContext, ReactNode, useContext, useState } from 'react';
// import { Context } from '.';
import './App.css';
import Login from './views/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { loadState } from './utils/storage';
import Home from './views/app/home';
import { Con } from '.';



function App() {
  return (
    <>
      {Con(<div className="App">
        <BrowserRouter>
          {!loadState('user')?.isLoggedIn ?
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes> :
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          }
        </BrowserRouter>
      </div>).provider}
    </>

  );
}

export default App;
