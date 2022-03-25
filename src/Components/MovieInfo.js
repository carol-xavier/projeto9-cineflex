import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function MovieInfo() {
    const { idMovie } = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes/`)
        promise.then(response => {
            const data = response.data.days;
            console.log("deu certo", data);
            setSessions(data);
        })

        promise.catch(response => {
            const { data } = response;
            console.log(response.error.status);
        })
    }, [])

    return sessions ? (
        <section className="movie-sessions">
            <Header />
            <div>
                <h1>Selecione o horário</h1>
                {sessions.map((session) => {
                    return <div key={session.id}>
                        <h6>{session.weekday} - {session.date}</h6>
                    <div className="session-times">
                        {(session.showtimes).map(movie => {
                            return <div className="session-time">{movie.name}</div>
                        })}
                    </div>
                    </div>
                })
                }
            </div>
        </section>
    ) : (
        <p>Carregando...</p>
    )
}


export default MovieInfo;