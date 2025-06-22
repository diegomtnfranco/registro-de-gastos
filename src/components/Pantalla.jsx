import React from "react";
const Pantalla = ({ total, esenciales, prescindibles, ahorro }) => {
  return (
    <>
      <article className="container my-4">
        {/* Primera fila: Total */}
        <div className="row mb-3">
          <div className="col text-center bg-primary text-white p-3 rounded">
            <h3>Balance Total</h3>
            <p>${total}</p>
          </div>
        </div>


        {/* Segunda fila: 3 columnas */}
        <div className="row text-center">
          <div className="col bg-warning text-white p-1 rounded mx-2">
            <h4>Gastos Esenciales:</h4>
            <p>${esenciales}</p>
          </div>
          <div className="col bg-danger text-white p-1 rounded mx-2">
            <h4>Gastos Prescindibles:</h4>
            <p>${prescindibles}</p>
          </div>
          <div className="col bg-success text-white p-1 rounded mx-2">
            <h4>Ahorro:</h4>
            <p>${ahorro}</p>
          </div>
        </div>
      </article >
    </>
  );
};

export default Pantalla;
