import React from "react";
import Styles from "./Styles.css";

const displayAdvanced = props => {
  const { resultado, displayMode, changeMinMax, array, indice } = props;
  return (
    <div
      className={
        displayMode
          ? [
              resultado >= 0
                ? "Display DisplayPositivo"
                : "Display DisplayNegative"
            ]
          : "Display"
      }
    >
      <div className="DisplayIzquierda">
        <div className="historial">
          {indice >= 0 ? (
            <div className="parteArribaDisplay">{array[indice]}</div>
          ) : null}
          {(indice - 1) >= 0 ? (
            <div className="parteMedioDisplay">{array[indice - 1]}</div>
          ) : null}
          {(indice - 2) >= 0 ? (
            <div className="parteAbajoDisplay">{array[indice - 2]}</div>
          ) : null}
        </div>
        <div className="resultado">
          <div resultado="resultado">{resultado}</div>
        </div>
      </div>
      <div className="DisplayDerecha">
        <div className="cursor" onClick={() => changeMinMax(1)}>
          ▲
        </div>
        <div className="cursor" onClick={() => changeMinMax(-1)}>
          ▼
        </div>
      </div>
    </div>
  );
};
export default displayAdvanced;
