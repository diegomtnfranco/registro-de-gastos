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
        const nuevaDb = db.filter((el) => el.id !== id);
        setDataBase(nuevaDb);
    };

    //Funcion para calcular el monto de cada una de las categorias
    const calcularTotales = () => {

        const total = db.reduce((acc, el) => acc + parseFloat(el.monto), 0);
        const esenciales = db
            .filter((el) => el.categoria === 'esencial')
            .reduce((acc, el) => acc + parseFloat(el.monto), 0);
        const prescindibles = db
            .filter((el) => el.categoria === 'prescindibles')
            .reduce((acc, el) => acc + parseFloat(el.monto), 0);
        const ahorro = db
            .filter((el) => el.categoria === 'ahorro')
            .reduce((acc, el) => acc + parseFloat(el.monto), 0);

        return { total, esenciales, prescindibles, ahorro };
    }

    const { total, esenciales, prescindibles, ahorro } = calcularTotales();


    //Componentes a mostrar por pantalla con sus propiedades
    return (
        <>
            <Pantalla
                total={total}
                escenciales={esenciales}
                prescindibles={prescindibles}
                ahorro={ahorro}
            />
            <h2>Registro de Gastos</h2>
            <Formulario
                CrearDatos={CrearDatos}
                ActualizarDatos={ActualizarDatos}
                setEditarDatos={setEditarDatos}
                editarDatos={editarDatos}
            />
            <Tabla
                data={db}
                setEditarDatos={setEditarDatos}
                eliminarDatos={EliminarDatos} />
        </>
    );
};

export default FormCrudApp;
