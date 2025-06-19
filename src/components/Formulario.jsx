import React from "react";
import { useState, useEffect } from "react";

const ValorInicialDb = {
  id: null,
  monto: "",
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
    if (!form.monto) {
      e.preventDefault();
      alert("Monto vacio: Añada un monto a su registro.");
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
      <h2>h2 de formulario</h2>
      <form>
        <article>
          {" "}
          {/* Input number */}
          <label>
            Ingrese el valor
            <input
              type="number"
              name="monto"
              min={"0"}
              onChange={handleChange}
              value={form.monto}
            />
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
