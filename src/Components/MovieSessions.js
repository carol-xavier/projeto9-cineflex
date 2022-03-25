import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookSession from './BookSession';
import Header from './Header';
import Footer from "./Footer";

function MovieSessions() {
    const { idSession } = useParams();

    const [input, setInput] = useState(''); 
    const [input2, setInput2] = useState(''); 

    const [spots, setSpots] = useState([]);

    const [getSeatIds, setGetSeatIds] = useState([]);
    const [getSeatNames, setGetSeatNames] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
        promise.then(response => {
            const data = response.data;
    
            setSpots(data.seats);
            console.log(data.seats);
        })
    }, [])

    function sendReservation(){
        let object = {
            ids: getSeatIds,
            name: input,
            cpf: input2
        };
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', object);
        promise.then(console.log("POST realizado com sucesso"));
    }
    


    return spots ? (
        <section className="bookSession">
            <Header />
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats">

                {spots.map((seat) => {
                    const { id, isAvailable, name } = seat;
                    return <BookSession 
                    callbackIDs={(chosenID) => setGetSeatIds([...getSeatIds, chosenID])}
                    callbackNames={(chosenSeat) => setGetSeatNames([...getSeatNames,chosenSeat])}
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
            <input value={input} onInput={e => setInput(e.target.value)} placeholder="Digite seu nome..."></input>
            <p>CPF do Comprador:</p>
            <input value={input2} onInput={e => setInput2(e.target.value)} placeholder="Digite seu CPF..."></input>

            <Link to={'/sucesso'} state={{name:"T5Driven", cpf:input2, seats:getSeatNames}}>
            <button onClick={sendReservation}>Reservar acentos</button>
            </Link>

            <Footer />
        </section>
    ) : (
        <p>Carregando...</p>
    )
}

export default MovieSessions;