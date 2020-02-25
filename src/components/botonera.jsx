import React from "react";
import Styles from "./Styles.css";


const botonera = (props) => {
    const {changeCadena,equalChange,deleteChange} = props;
  return (
    <div className="Botonera">
      <div className="BotoneraArriba">
        <div onClick={()=>deleteChange()}className="botonOp">←</div>
        <div className="botonOp">
          <p />
        </div>
        <div onClick={()=> changeCadena("/")} className="botonOp">/</div>
        <div onClick={()=>changeCadena("*")} className="botonOp">*</div>
        <div onClick={()=>changeCadena("7")} className="boton">7</div>
        <div onClick={()=>changeCadena("8")} className="boton">8</div>
        <div onClick={()=>changeCadena("9")} className="boton">9</div>
        <div onClick={()=>changeCadena("-")} className="botonOp">-</div>
        <div onClick={()=>changeCadena("4")} className="boton">4</div>
        <div onClick={()=>changeCadena("5")} className="boton">5</div>
        <div onClick={()=>changeCadena("6")} className="boton">6</div>
        <div onClick={()=>changeCadena("+")} className="botonOp">+</div>
      </div>
      <div className="BotoneraAbajo">
        <div className="Izquierda">
          <div className="Arriba">
            <div onClick={()=>changeCadena("1")} className="botonArriba">1</div>
            <div onClick={()=>changeCadena("2")} className="botonArriba">2</div>
            <div onClick={()=>changeCadena("3")} className="botonArriba">3</div>
          </div>
          <div className="Abajo">
            <div onClick={()=>changeCadena("0")} className="botonAbajo">0</div>
            <div onClick={()=>changeCadena(".")} className="boton">.</div>
          </div>
        </div>
        <div onClick={()=>equalChange("=")} className="igual">=</div>
      </div>
    </div>
  );
};
export default botonera;
