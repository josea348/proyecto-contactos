import React from "react"
import axios from "axios";

const ListarUsuarios = () => {
    return(
        <div>
            <h1>Usuarios Registrados</h1>
            <table>
                <tr>
                    <th>Identificacion</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Peticion</th>
                </tr>
                <tr></tr>
            </table>
        </div>
    )
}

export default ListarUsuarios;