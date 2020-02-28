import React, { Component } from "react";
import "./App.css";
import Display from "../components/display";
import DisplayAdvanced from "../components/displayAdvanced";
import Botonera from "../components/botonera";
import cloneDeep from "clone-deep";
import BotoneraAvanzada from "../components/botoneraAvanzada";
import { evaluate } from "mathjs";

class App extends Component {
  state = {
    cadena: "",
    mode: true, //false va a ser el modo basico. true va a ser el modo avanzado
    displayMode: false,
    array: [],
    indice:0
  };

  changeCadena = valor => {
    let newState = cloneDeep(this.state);
    let cad2 = cloneDeep(this.state.cadena);
    cad2 = cad2 + valor;
    newState.displayMode = false;
    this.setState({ cadena: cad2 });
    this.setState({ displayMode: newState.displayMode });
  };
  equalChange = () => {
    let newState = cloneDeep(this.state);

    if (newState.cadena !== "") {
      newState.array.push(newState.cadena);
      newState.cadena = evaluate(newState.cadena);
      newState.array.push(newState.cadena);
      newState.displayMode = true;
    }

    this.setState({ cadena: newState.cadena });
    this.setState({ array: newState.array });
    this.setState({ displayMode: newState.displayMode });
  };
  deleteChange = () => {
    let newState = cloneDeep(this.state);
    newState.cadena = newState.cadena.slice(0, -1);
    this.setState({
      cadena: newState.cadena
    });
  };
  changeMode = () => {
    let newState = cloneDeep(this.state);
    newState.mode = !newState.mode;
    this.setState({
      mode: !this.state.mode
    });
  };
  changeMinMax = (valor) => {
    let newState = cloneDeep(this.state);
    newState.indice+=valor;
    this.setState({
      indice: newState.min
    });
  
    this.setState({indice:newState.indice})
 
  };
  render() {
    return (
      <div className="App">
        {console.log(this.state.mode)}
        {this.state.mode ? (
          <div className="calculadora">
            <Display
              displayMode={this.state.displayMode}
              resultado={this.state.cadena}
            />
            <div className="botonera">
              <Botonera
                mode={this.state.mode}
                changeCadena={this.changeCadena}
                equalChange={this.equalChange}
                deleteChange={this.deleteChange}
                changeMode={this.changeMode}
              />
            </div>
          </div>
        ) : (
          <div className="calculadora">
            <DisplayAdvanced
              displayMode={this.state.displayMode}
              resultado={this.state.cadena}
              changeMinMax={this.changeMinMax}
              array={this.state.array}
              indice={this.state.indice}
            />
            <div className="keyboard">
              <Botonera
                mode={this.state.mode}
                changeCadena={this.changeCadena}
                equalChange={this.equalChange}
                deleteChange={this.deleteChange}
                changeMode={this.changeMode}
              ></Botonera>
              <BotoneraAvanzada
                mode={this.state.mode}
                changeCadena={this.changeCadena}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
