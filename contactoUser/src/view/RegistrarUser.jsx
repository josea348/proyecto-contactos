import React, { useState } from "react";
import axios from "axios";

const RegistrarUser = () => {
    const [formUser, setFormUsert] = useState(
        identificacion = '',
        nombre = '',
        email = '',
        password = '',
    )

    return(
        <div>
            <form action="" className="">
                <h1>Registro</h1>
                <div>
                    <label htmlFor="">Identificacion</label>
                    <input type="number" name="identificacion" id="" />
                </div>
                <div>
                    <label htmlFor="">nombre completo</label>
                    <input type="text" name="nombre" id="" />
                </div>
                <div>
                    <label htmlFor="">Correo</label>
                    <input type="email" name="email" id="" />
                </div>
                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="password" id="" />
                </div>
                <input type="submit" value="Registrar" />
            </form>
        </div>
    )
}

export default RegistrarUser;