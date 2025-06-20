import React from "react";
import TablaFila from "./TablaFila";

const Tabla = ({ data, setEditarDatos, eliminarDatos }) => {
  return (
    <>
      <h2>Lista de gastos</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4}></td>
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
