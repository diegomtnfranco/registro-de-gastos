import FechaActual from "./Fecha";

const TablaFila = ({ row, setEditarDatos, eliminarDatos }) => {
  return (
    <tr>
      <td>
        <FechaActual />
      </td>

      <td>${row.monto}</td>
      <td>{row.categoria}</td>
      <td>{row.nota}</td>
      <td>
        <button onClick={() => setEditarDatos(row)}>Edit</button>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={() => eliminarDatos(row.id)}
        ></button>
      </td>
    </tr>
  );
};

export default TablaFila;
