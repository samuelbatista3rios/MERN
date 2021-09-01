import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; //ligação entre o front e o back

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      CNPJ: "",
      atividade: "",
    };

    this.changeName = this.changeName.bind(this);
    this.changeCNPJ = this.changeCNPJ.bind(this);
    this.changeAtividades = this.changeAtividades.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  changeCNPJ(event) {
    this.setState({
      CNPJ: event.target.value,
    });
  }
  changeAtividades(event) {
    this.setState({
      atividades: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      name: this.state.name,
      CNPJ: this.state.CNPJ,
      atividades: this.state.atividades,
    };
    console.log(registered);
    axios
      .post("http://localhost:9000/Desafio/", registered)
      .then((response) => console.log(response.data));

    this.setState({
      name: "",
      CNPJ: "",
      /*atividades: "",*/
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Name"
                onChange={this.changeName}
                value={this.state.name}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="CNPJ"
                onChange={this.changeCNPJ}
                value={this.state.CNPJ}
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
