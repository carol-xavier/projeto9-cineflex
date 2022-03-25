import { useLocation } from "react-router-dom";
import Header from './Header';

function Success(){
    const location = useLocation()
    const {name, cpf, seats} = location.state;
    console.log("verificar props", location.state);


    return(
        <section className="success-page">
         <Header />
         <h6>Pedido feito com sucesso!</h6>
         <h2>Filme e sessão</h2>
         <p>Nome do filme</p>
         <p>DADA e HORA</p>
         <h2>Ingressos</h2>
         <p>{seats}</p>
         <h2>Comprador</h2>
         <p>{name}</p>
         <p>{cpf}</p>

        <button>Voltar para Home</button>
        </section>
    )
}

export default Success;