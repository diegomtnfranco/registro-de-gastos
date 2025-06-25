// Este component es el component Padre de la app CRUD.
import { useState } from "react";
import React from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import Pantalla from "./Pantalla";
import "../App.css";

const DatosInicialesDb = [];

const FormCrudApp = () => {
  //Hooks

  const [db, setDataBase] = useState(DatosInicialesDb);
  const [editarDatos, setEditarDatos] = useState(null);

  //Funciones CRUD

  const CrearDatos = (data) => {
    data.id = Date.now();
    setDataBase([...db, data]);
  };
  const ActualizarDatos = (data) => {
    const DatosNuevos = db.map((el) => (el.id === data.id ? data : el));
    setDataBase(DatosNuevos);
    setEditarDatos(null);
  };

  const EliminarDatos = (id) => {
    const confirmar = confirm(
      "Monto vacio: Añada un monto a su registro y seleccione una categoria."
    );

    if (confirmar) {
      const nuevaDb = db.filter((el) => el.id !== id);
      setDataBase(nuevaDb);
    }
  };

  //Funcion para calcular el monto de cada una de las categorias
  const calcularTotales = () => {
    const ingresos = db
      .filter((el) => el.categoria === "Ingreso")
      .reduce((acc, el) => acc + parseFloat(el.monto), 0);

    const esenciales = db
      .filter((el) => el.categoria === "Esenciales")
      .reduce((acc, el) => acc + parseFloat(el.monto), 0);
    const prescindibles = db
      .filter((el) => el.categoria === "Prescindibles")
      .reduce((acc, el) => acc + parseFloat(el.monto), 0);
    const ahorro = db
      .filter((el) => el.categoria === "Ahorro")
      .reduce((acc, el) => acc + parseFloat(el.monto), 0);

    const total = ingresos - esenciales - prescindibles - ahorro;

    const gastosEsenciales = ingresos * 0.5 - esenciales;
    const gastosPrescindibles = ingresos * 0.3 - prescindibles;
    const gastosAhorro = ingresos * 0.2 - ahorro;

    return { total, gastosEsenciales, gastosPrescindibles, gastosAhorro };
  };

  const { total, gastosEsenciales, gastosPrescindibles, gastosAhorro } =
    calcularTotales();

  //Componentes a mostrar por pantalla con sus propiedades
  return (
    <>
      <div className="container my-5">
        <article className="Grupo">
          <article className="Grupo-1">
            <Pantalla
              total={total}
              esenciales={gastosEsenciales}
              prescindibles={gastosPrescindibles}
              ahorro={gastosAhorro}
            />
            <Formulario
              CrearDatos={CrearDatos}
              ActualizarDatos={ActualizarDatos}
              setEditarDatos={setEditarDatos}
              editarDatos={editarDatos}
            />
          </article>

          <Tabla
            data={db}
            setEditarDatos={setEditarDatos}
            eliminarDatos={EliminarDatos}
          />
        </article>
      </div>
    </>
  );
};

export default FormCrudApp;
