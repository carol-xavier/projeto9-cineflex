import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import MovieInfo from './MovieInfo';

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
            <h1>Selecione o filme</h1>
            <div className="movie-collection">
                
                    {
                        movies.map(movie => {
                            const { id, posterURL, title } = movie;
                            return <div className='poster-container' key={id}>
                                <Link to={`/filme/${id}`}>
                                <img className='poster' src={posterURL} alt={title}  />
                                </Link>
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

//to={`/filme/${id}`} 