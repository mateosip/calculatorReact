import React from "react";
import Styles from "./Styles.css";


const botoneraAvanzada = (props) => {
    const {changeCadena,equalChange,deleteChange,changeMode} = props;
  return (
    <div className="BotoneraAdv">
      <div className="botonOp" onClick={() => changeCadena("sin")}>
        sin
      </div>
      <div className="botonOp" onClick={() => changeCadena("cos")}>
        cos
      </div>
      <div className="botonOp" onClick={() => changeCadena("tan")}>
        tan
      </div>
      <div className="botonOp" onClick={() => changeCadena("(")}>
        (
      </div>
      <div className="botonOp" onClick={() => changeCadena(")")}>
        )
      </div>
    </div>
  );
};
export default botoneraAvanzada;