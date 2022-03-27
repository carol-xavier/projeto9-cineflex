import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from './Header';

function Success() {
    const location = useLocation()
    const { name, cpf, seats, movie, day, hora } = location.state;


    return (
        <section className="success-page">
            <Header />
            <div className="success-message">
                <h6>Pedido feito <br></br> com sucesso!</h6>
            </div>
            <div className="chosen-movie">
                <h2>Filme e sessão</h2>
                <p>{movie}</p>
                <p>{day} {hora}</p>
            </div>
            <div className="tickets">
                <h2>Ingressos</h2>
                <p>{seats}</p>
            </div>
            <div className="buyer">
                <h2>Comprador</h2>
                <p>{name}</p>
                <p>{cpf}</p>
            </div>

            <Link to={"/"}>
                <button>Voltar para Home</button>
            </Link>
        </section>
    )
}

export default Success;