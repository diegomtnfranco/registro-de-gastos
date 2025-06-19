// Este component es el component Padre de la app CRUD.
import { useState } from "react";
import React from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import Pantalla from "./Pantalla";

const DatosInicialesDb = [
  {
    id: null,
    monto: "0",
  },
];

const FormCrudApp = () => {
  const [db, setDataBase] = useState(DatosInicialesDb);

  const [editarDatos, setEditarDatos] = useState(null);

  const CrearDatos = (data) => {
    data.id = Date.now();
    setDataBase([...db, data]);
  };
  const ActualizarDatos = (data) => {
    const DatosNuevos = db.map((el) => (el.id === data.id ? data : el));
    setEditarDatos(DatosNuevos);
  };

  const EliminarDatos = () => {
    alert("caca");
  };
  // const EliminarDatos = (data) => {};
  return (
    <>
      <Pantalla />
      <h1>h1 de CRUDApp</h1>
      <Formulario
        CrearDatos={CrearDatos}
        ActualizarDatos={ActualizarDatos}
        setEditarDatos={setEditarDatos}
        editarDatos={editarDatos}
      />
      {/* form */}
      <Tabla data={db} /> {/* tabla */}
    </>
  );
};

export default FormCrudApp;
