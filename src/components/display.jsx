import React from 'react';
import Styles from './Styles.css';

const display = (props) =>{
    const resultado = props.resultado;
    const displayMode= props.displayMode;
    
    return(
        // <div className={(resultado.charAt(0) === "-")?"DisplayNegative":"Display"}>
        
        <div className=
            {displayMode?
                [
                    (resultado>=0?"Display DisplayPositivo":"Display DisplayNegative")
                ] 
            :
                "Display"
            }>
            {resultado}
        </div>
    );
}
export default display;