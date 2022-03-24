import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

function FirstScreen() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            setMovies(response.data);
        });

        // promise.catch(response.error.status); 
    }, []);


    return movies ? (
        <section className='first-screen'>
            <Header />
            <h2>Selecione o filme</h2>
            <div className="movie-collection">
                
                    {
                        movies.map(movie => {
                            const { id, posterURL, title } = movie;
                            return <div className='poster-container' key={id}>
                                <img className='poster' src={posterURL} alt={title}  />
                            </div>
                        })
                    }
                
            </div>
        </section>
    ) : (
        <p>Carregando...</p>
    )
}

export default FirstScreen;