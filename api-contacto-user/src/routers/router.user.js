import { Router } from "express";
import { listarUser, registrarUser } from "../controllers/controlle.user.js";
const routeUser = Router();

routeUser.post('/registrar',registrarUser);
routeUser.get('/listar',listarUser);

export default routeUser;