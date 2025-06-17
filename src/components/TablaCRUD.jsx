import React from 'react';

export default function TablaCRUD({ registros, eliminarRegistro, editarRegistro }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Tipo de Gasto</th>
                    <th><button>UPD</button></th>
                    <th><button>DEL</button></th>

                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}
