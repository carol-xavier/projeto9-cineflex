import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from "./Footer";

function MovieInfo() {
    const { idMovie } = useParams();

    const [wholeInfo, setWholeInfo] = useState({});

    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes/`)
        promise.then(response => {
            const data = response.data.days;
            
            setWholeInfo(response.data);
            setSessions(data);
        })
    }, [])

    console.log(wholeInfo);

    return sessions ? (
        <section className="movie-sessions">
            <Header />
            <h1>Selecione o horário</h1>
            <div>
                {sessions.map((session) => {
                    return <div key={session.id}>
                        <h6>{session.weekday} - {session.date}</h6>
                    <div className="session-times">
                        {(session.showtimes).map(movie => {
                            return <Link to={`/sessao/${movie.id}`}><div className="session-time" key={movie.id}>{movie.name}</div></Link>
                        })}
                    </div>
                    </div>
                })
                }
            </div>

            <Footer image={wholeInfo.posterURL} movieTitle={wholeInfo.title}/>
        </section>
    ) : (
        <p>Carregando...</p>
    )
}


export default MovieInfo;