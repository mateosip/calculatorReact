import React from 'react';
import Styles from './Styles.css';

const display = (props) =>{
    const resultado = props.resultado;
    
    return(
        <div className={(resultado.charAt(0) === "-")?"DisplayNegative":"Display"}>
            {resultado}
        </div>
    );
}
export default display;