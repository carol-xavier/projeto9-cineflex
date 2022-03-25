import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookSession from './BookSession';
import Header from './Header';


function MovieSessions() {
    const { idSession } = useParams();

    const [spots, setSpots] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
        promise.then(response => {
            const data = response.data;
    
            setSpots(data.seats);
            console.log(data.seats);
        })
    }, [])

    return spots ? (
        <section className="bookSession">
            <Header />
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats">
                {spots.map((seat) => {
                    const { id, isAvailable, name } = seat;
                    return <BookSession 
                    isAvailable={isAvailable}
                    name={name}
                    index={id}
                    />
                })}
            </div>
            <div>
                <div>Selecionado</div>
                <div>Disponível</div>
                <div>Indisponível</div>
            </div>
            <p>Nome do Comprador:</p>
            <input placeholder="Digite seu nome..."></input>
            <p>CPF do Comprador:</p>
            <input placeholder="Digite seu CPF..."></input>
        </section>
    ) : (
        <p>Carregando...</p>
    )
}

export default MovieSessions;