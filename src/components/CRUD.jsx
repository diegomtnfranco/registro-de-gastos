// Este component es el component Padre de la app CRUD.
import { useState, useEffect } from "react";
import React from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import Pantalla from "./Pantalla";
import "../App.css";

// Inicializa sin datos iniciales, si agregara algo, crea las categorias.
const DatosInicialesDb = [];

const FormCrudApp = () => {
  //Hooks
  const [db, setDataBase] = useState(DatosInicialesDb);
  const [editarDatos, setEditarDatos] = useState(null);

  //Servidor localhost
  useEffect(() => {
    fetch("http://localhost:3001/registros")
      .then((res) => res.json()) //res --> respuesta convertida en datos json
      .then((data) => setDataBase(data)) //datos que se actualizan
      .catch((err) => console.error("Error al cargar datos:", err)); //respuesta al haber un error en el catch
  }, []);

  //Funciones CRUD (con AJAX)

  const CrearDatos = async (data) => {
    try {
      // try engloba el codigo que puede fallar
      const res = await fetch("http://localhost:3001/registros", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //ayuda al servidor json a recibir la informacion de react
        body: JSON.stringify(data), // convierte la informacion de js a json
      });

      const nuevo = await res.json();
      setDataBase([...db, nuevo]);
    } catch (error) {
      //en caso que el codigo de "try" falle, muestra el catch
      console.error("Error al crear el dato:", error);
    }
  };

  const ActualizarDatos = async (data) => {
    try {
      const res = await fetch(`http://localhost:3001/registros/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const actualizado = await res.json();
      const nuevosDatos = db.map((el) =>
        el.id === data.id ? actualizado : el
      );
      setDataBase(nuevosDatos);
      setEditarDatos(null);
    } catch (error) {
      console.error("Error al actualizar el dato:", error);
    }
  };

  const EliminarDatos = async (id) => {
    const confirmar = confirm(
      "¿Estás seguro de que deseas eliminar este registro?"
    );
    if (!confirmar) return;

    try {
      await fetch(`http://localhost:3001/registros/${id}`, {
        method: "DELETE",
      });

      const nuevaDb = db.filter((el) => el.id !== id);
      setDataBase(nuevaDb);
    } catch (error) {
      console.error("Error al eliminar el dato:", error);
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
