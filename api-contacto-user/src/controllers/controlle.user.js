import { pool } from "../databases/conexion.js";

export const registrarUser = async (req, res) => {
    try {
        const { identificacion, nombre, correo, password } = req.body;
        const sql = `insert into users(identificacion,nombre,correo,password) values (?,?,?,?)`;
        const [row] = pool.query(sql,[identificacion, nombre, correo, password]);
        if(row.affetedRows>0) return res.status(200).json({'statos': 200, 'message': 'Se registro el usuario con exito.'});
        else return res.status(404).json({'statos': 404, 'message': 'No se registro el usuario.'});
    } catch (e) {
        res.status(500).json({'statos': 500, 'message': 'Error.'+e});
    }
}

export const listarUser = async (req, res) => {
    try {
        const sql = `select * from users`;
        const [row] = pool.query(sql);
        if(row.length>0) return res.status(200).json(row[0]);
        else return res.status(404).json({'status': 404, 'message': 'No hay usuarios registrados en la base de datos.'});
    } catch (e) {
        res.status(500).json({'statos': 500, 'message': 'Error.'+e});
    }
}