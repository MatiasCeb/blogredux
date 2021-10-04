import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    }
  }

  componentDidMount() {
    this.setState({
      usuarios: [
        {
          nombre: "Matias",
          correo: "matiasceb8812@gmail.com",
          enlace: "matceb.netlify.app",
        },
        {
          nombre: "Platzi",
          correo: "platzi@platzi.com",
          enlace: "platzi.com",
        }
      ]
    })
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (
      <tr>
        <td>
          { usuario.nombre }
        </td>
        <td>
          { usuario.correo }
        </td>
        <td>
          { usuario.enlace }
        </td>
      </tr>
    ))
  );

  render() {
    return (
      <div className="margin">
        <table className="tabla">
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;