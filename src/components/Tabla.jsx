import React from "react";
import TablaFila from "./TablaFila";

const Tabla = ({ data, setEditarDatos, eliminarDatos }) => {
  return (
    <>
      <h2>h2 de la tabla</h2>
      <table>
        <thead>
          <tr>
            <th>
              <h3>encabezado de la tabla</h3>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <TablaFila
                key={el.id}
                row={el}
                setEditarDatos={setEditarDatos}
                eliminarDatos={eliminarDatos}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
