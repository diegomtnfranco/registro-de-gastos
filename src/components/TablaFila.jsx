import FechaActual from "./Fecha";

const TablaFila = ({ row, setEditarDatos, eliminarDatos }) => {
  // console.log("ID a eliminar:", row.id);
  return (
    <tr>
      <td>
        <FechaActual />
      </td>

      <td>${row.monto}</td>
      <td>{row.categoria}</td>
      <td>{row.nota}</td>
      <td className="boton_editar_eliminar">
        <button onClick={() => setEditarDatos(row)}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => eliminarDatos(row.id)}
        >
          <i className="bi bi-x-square"></i>
        </button>
      </td>
    </tr>
  );
};
export default TablaFila;
