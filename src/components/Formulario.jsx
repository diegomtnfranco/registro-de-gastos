import React from "react";
import { useState, useEffect } from "react";

const ValorInicialDb = {
  id: null,
  monto: "",
  categoria: "",
  nota: ""
};

const Formulario = ({
  CrearDatos,
  ActualizarDatos,
  editarDatos,
  setEditarDatos,
}) => {
  const [form, setForm] = useState(ValorInicialDb);

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
      [e.target.name]:
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  //  Funcion que se ejecuta al presionar el boton submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.monto || !form.categoria || !form.nota || form.monto <= 0) {
      e.preventDefault();
      alert("Monto vacio: Añada un monto a su registro y seleccione una categoria.");
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
    <div>
      <h2>Registro de gastos</h2>
      <form onSubmit={handleSubmit}>
        <article>
          <label>
            Ingrese el monto:
            <input
              type="number"
              name="monto"
              min={"0"}
              onChange={handleChange}
              value={form.monto}
            />
          </label>
        </article>

        <article>
          <label>
            Categoria:
            <select name="categoria" value={form.categoria} onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Esenciales">Esenciales</option>
              <option value="Prescindibles">Prescindibles</option>
              <option value="Ahorro">Ahorro</option>
            </select>
          </label>
        </article>

        <article>
          <label>
            Nota:
            <input
              type="text"
              name="nota"
              min={"0"}
              onChange={handleChange}
              value={form.nota} />
          </label>
        </article>

        <br />

        <article>
          <input type="submit" value="Enviar" onClick={handleSubmit} />
          <input type="reset" value="Reset" onClick={handleReset} />
        </article>
      </form>
    </div>
  );
};

export default Formulario;
