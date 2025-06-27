import React from "react";
import { useState, useEffect } from "react";

// Esta constante define los datos y valores
const ValorInicialDb = {
  id: null,
  monto: "",
  categoria: "",
  nota: "",
};

// Esta constante llama a las funciones definidas en el CRUD.jsx para usarlas aquí.
const Formulario = ({
  CrearDatos,
  ActualizarDatos,
  editarDatos,
  setEditarDatos,
}) => {
  const [form, setForm] = useState(ValorInicialDb);

  //Cuando se inicializa, empezará con ValorInicialDb, y el efecto se ejecuta cada vez que
  //se ejecute la funcion editarDatos.
  useEffect(() => {
    if (editarDatos) {
      setForm(editarDatos);
    } else {
      setForm(ValorInicialDb);
    }
  }, [editarDatos]);

  // Funcion que se ejecuta al introducir un monto
  const handleChange = (e) => {
    setForm({
      ...form,
      //Apunta al input del HTML por el name
      [e.target.name]:
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  //  Funcion que se ejecuta al presionar el boton submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.monto || !form.categoria || form.monto <= 0) {
      e.preventDefault();
      alert(
        "Mensaje: Añada un monto a su registro y seleccione una categoria."
      );
      return;
    }
    if (form.id === null) {
      CrearDatos(form);
    } else {
      ActualizarDatos(form);
    }

    setForm(ValorInicialDb);
  };

  // Funcion que se ejecuta al presionar el boton reset
  const handleReset = () => {
    setForm(ValorInicialDb);
    setEditarDatos(null);
  };

  // HTML:
  return (
    <div className="card p-4 mb-4">
      <h2>Registro de gastos/ingresos</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Ingrese el monto:
            <input
              type="number"
              name="monto"
              min={"0"}
              onChange={handleChange}
              value={form.monto}
              className="form-control"
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Categoria:
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Seleccione</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Esenciales">Esenciales</option>
              <option value="Prescindibles">Prescindibles</option>
              <option value="Ahorro">Ahorro</option>
            </select>
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Nota:
            <input
              type="text"
              name="nota"
              min={"0"}
              onChange={handleChange}
              value={form.nota}
              className="form-control"
            />
          </label>
        </div>

        <br />

        <div>
          <input
            type="submit"
            value="Enviar"
            onClick={handleSubmit}
            className="btn btn-primary"
          />
          <input
            type="reset"
            value="Reset"
            onClick={handleReset}
            className="btn btn-secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
