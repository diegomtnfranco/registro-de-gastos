import FechaActual from "./Fecha";

const TablaFila = ({ row, setEditarDatos, eliminarDatos }) => {
  return (
    <tr>
      <td>
        <FechaActual />
      </td>

      <td>{row.monto}</td>
      <td>
        <button onClick={() => setEditarDatos(row)}>Editar</button>
        <button onClick={() => eliminarDatos(row.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
