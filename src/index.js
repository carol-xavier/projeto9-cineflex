import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

Renderizar();
function Renderizar(){
    ReactDOM.render(
          <App />,
        document.querySelector('.root')
      );
}

export default Renderizar;
