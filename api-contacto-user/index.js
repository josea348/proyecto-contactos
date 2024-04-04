import express from "express";
import bodyParser from "body-parser";
const servidor = express();

import routeUser from "./src/routers/router.user.js";

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));

servidor.use('/user',routeUser);

servidor.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
})