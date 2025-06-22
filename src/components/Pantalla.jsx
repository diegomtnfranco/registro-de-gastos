import React from "react";
const Pantalla = ({ total, esenciales, prescindibles, ahorro }) => {
  return (
    <>
      <article style={{ display: "grid", gap: "5px" }}>
        {/* Primera fila: Total */}
        <div style={{ backgroundColor: "#aed6f1", padding: "10px", textAlign: "center" }}>
          <h3>Balance Total</h3>
          <p>${total}</p>
        </div>

        {/* Segunda fila: 3 columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "5px",
          }}
        >
          <div style={{ backgroundColor: "#52be80", padding: "5px", textAlign: "center" }}>
            <h4>Gastos Esenciales:</h4>
            <p>${esenciales}</p>
          </div>
          <div style={{ backgroundColor: "#ec7063", padding: "5px", textAlign: "center" }}>
            <h4>Gastos Prescindibles:</h4>
            <p>${prescindibles}</p>
          </div>
          <div style={{ backgroundColor: "#f7dc6f", padding: "5px", textAlign: "center" }}>
            <h4>Ahorro:</h4>
            <p>${ahorro}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Pantalla;
