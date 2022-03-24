import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/style/style.css';
import FirstScreen from './FirstScreen';
import MovieInfo from './MovieInfo';
import BookSession from './BookSession';
import Success from './Success';


export default function App(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstScreen />} />
            <Route path="/filme/:idMovie" element={<MovieInfo />} />
            <Route path="/sessao/:idSession" element={<BookSession />} />
            <Route path="/sucesso" element={<Success />} />
        </Routes>
    </BrowserRouter>
    )
}
