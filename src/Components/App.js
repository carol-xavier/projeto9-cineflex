import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/style/style.css';
import FirstScreen from './FirstScreen';
import MovieSessions from './MovieSessions';
import MovieSeats from './MovieSeats';
import Success from './Success';

export default function App(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstScreen />} />
            <Route path="/filme/:idMovie" element={<MovieSessions />} />
            <Route path="/sessao/:idSession" element={<MovieSeats/>} />
            <Route path="/sucesso" element={<Success />} />
        </Routes>
    </BrowserRouter>
    )
}
