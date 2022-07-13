import React, { Component } from "react";
// import "./App.css";

class App extends Component {
  state = {
    turma: [
      {
        nome: "Danilo",
        idade: 25
      },
      {
        nome: "Raquel",
        idade: 22
      }
    ]
  };

  render() {
    return (
      <section>
        <h1>Vamos começar com state!</h1>

        <ul className="lista">
          <li>{this.state.turma[0].nome}</li>
          <li>{this.state.turma[0].idade}</li>
        </ul>

        <ul className="lista">
          <li>{this.state.turma[1].nome}</li>
          <li>{this.state.turma[1].idade}</li>
        </ul>
      </section>
    );
  }
}

export default App;
