import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';


function BookSession(props) {
    const { index, isAvailable, name, callbackIDs, callbackNames } = props;

    const [select, setSelect] = useState(false);

    return isAvailable ? (<div className="seat-option">
                    <div className={select ? 'selected' : 'disponível'} onClick={()=> {setSelect(!select); 
                        callbackIDs(index);
                        callbackNames(name)}}>{name}</div>
                    </div>
                    ) : (
                <div className="seat-option" onClick={()=> alert("Esse assento não está disponível")}>
                    <div className={'indisponível'}>{name}</div>
                </div>)
    
}

export default BookSession;

