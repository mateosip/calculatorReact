import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "../components/display";
import Botonera from "../components/botonera";

class App extends Component {
  state = {
    cadena: ""
  };

  changeCadena = valor => {
    this.setState({ cadena: this.state.cadena + valor });
  };
  equalChange = () => {
    if (eval(this.state.cadena.toString() != "")) {
      this.setState({ cadena: eval(this.state.cadena).toString() });
    }
  };
  deleteChange = () => {
    this.setState({
      cadena: this.state.cadena.slice(0, this.state.cadena.length - 1)
    });
  };
  render() {
    return (
      <div className="App">
        <Display resultado={this.state.cadena} />
        <Botonera
          changeCadena={this.changeCadena}
          equalChange={this.equalChange}
          deleteChange={this.deleteChange}
        />
      </div>
    );
  }
}

export default App;
