import React from "react";
const Pantalla = () => {
  return (
    <>
      <article>
        {" "}
        {/* Contenedor de la pantalla */}
        <div style={{ backgroundColor: "red" }}>
          {" "}
          {/*Contenedor pantalla principal  */}
          <h3>Balance Total</h3>
          <p>$12345</p>
        </div>
        <div style={{ backgroundColor: "" }}>
          {" "}
          {/* Contenedor division de pantallas mas pequeñas */}
          <div style={{ backgroundColor: "blue" }}>
            <h4>Gastos Esenciales:</h4>
            <p>$12345</p>
          </div>
          <div style={{ backgroundColor: "gold" }}>
            <h4>Gastos Prescindibles:</h4>
            <p>$12345</p>
          </div>
          <div style={{ backgroundColor: "green" }}>
            <h4>Ahorro:</h4>
            <p>$12345</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Pantalla;
