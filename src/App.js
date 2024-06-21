import './App.scss';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import NewLog from './components/NewLog/NewLog';
import Home from './components/Home/Home';


const App = () => {
    const baseURL = "http://localhost:3000";
     

        return (
            <BrowserRouter>
             <div className="app__container">
             <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-log" element={<NewLog />} />
                <Route path="/log/:id" element={ <Log /> } /> 

            </Routes>
            </div>
            </BrowserRouter>
            
        );
        
        
    
}

export default App;
