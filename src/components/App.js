import React from "react";

const App = () => {

  const ponerFilas = () => [
    <tr>
      <td>
        Matias
      </td>
      <td>
        matiasceb8812@gmail.com
      </td>
      <td>
        matceb.netlify.app
      </td>
    </tr>,
    <tr>
      <td>
        Platzi
      </td>
      <td>
        platzi@platzi.com
      </td>
      <td>
        platzi.com
      </td>
    </tr>
  ];
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
          { ponerFilas() }
        </tbody>
      </table>
    </div>
  );
}

export default App;