import { Link } from "react-router-dom";
import Header from './Header';

function FirstScreen(){
    return(
        <section>
            <Header />
            <h2>Selecione o filme</h2>
            <div className="movie-collection">
                <div>Coluna1</div>
                <div>Coluna2</div>
            </div>
        </section>
    )
}

export default FirstScreen;