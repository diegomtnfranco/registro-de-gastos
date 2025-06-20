import React from "react";
const Pantalla = ({ total, escenciales, prescindibles, ahorro }) => {
  return (
    <>
      <article>
        {/* Contenedor de la pantalla */}
        <div style={{ backgroundColor: "red" }}>
          {/*Contenedor pantalla principal  */}
          <h3>Balance Total</h3>
          <p>${total}</p>
        </div>

        <div>
          {/* Contenedor division de pantallas mas pequeñas */}
          <div style={{ backgroundColor: "blue" }}>
            <h4>Gastos Esenciales:</h4>
            <p>${escenciales}</p>
          </div>
          <div style={{ backgroundColor: "gold" }}>
            <h4>Gastos Prescindibles:</h4>
            <p>${prescindibles}</p>
          </div>
          <div style={{ backgroundColor: "green" }}>
            <h4>Ahorro:</h4>
            <p>${ahorro}</p>
          </div>
        </div>

      </article>
    </>
  );
};

export default Pantalla;
