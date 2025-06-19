import React from "react";

function FechaActual() {
  const fecha = new Date();

  const año = fecha.getFullYear();
  const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
  const dia = fecha.getDate();
  const fechaFormateada = `${dia}/${mes}/${año}`;

  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  const horarioFormateado = `${hora}:${minutos}:${segundos}`;

  return (
    <div>
      {fechaFormateada} <br></br>
      {horarioFormateado}
    </div>
  );
}

export default FechaActual;
