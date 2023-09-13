const express = require ("express");
const mainController = require("../Controllers/mainControllers");

const mainRouter = express.Router();

mainRouter.get("/", mainController.mostrarHome);

mainRouter.get("/register", mainController.mostrarRegistro );
mainRouter.get("/login", mainController.mostrarLogin);

module.exports = mainRouter;
