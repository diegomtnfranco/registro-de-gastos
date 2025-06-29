import React from "react";
const Pantalla = ({ total, esenciales, prescindibles, ahorro }) => {
  return (
    <>
      <article className="container my-4">
        {/* Primera fila: Total */}
        <div className="row mb-3">
          <div className="col text-center bg-primary text-white p-3 rounded">
            <h4>Balance Total</h4>
            <h3>${total}</h3>
          </div>
        </div>


        {/* Segunda fila: 3 columnas */}
        <div className="row text-center">
          <div className="col bg-warning text-white p-1 rounded mx-2">
            <h4>Gastos Esenciales:</h4>
            <h3>${esenciales}</h3>
          </div>
          <div className="col bg-danger text-white p-1 rounded mx-2">
            <h4>Gastos Prescindibles:</h4>
            <h3>${prescindibles}</h3>
          </div>
          <div className="col bg-success text-white p-1 rounded mx-2">
            <h4>Ahorro:</h4>
            <h3>${ahorro}</h3>
          </div>
        </div>
      </article >
    </>
  );
};

export default Pantalla;
