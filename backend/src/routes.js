const express = require("express");

const routes = express.Router();

const ongsController = require("./controllers/OngsController");
const profileController = require("./controllers/ProfileController");
const incidentsController = require("./controllers/IncidentsController");
const loginController = require("./controllers/LoginController");

routes.get("/ongs", ongsController.index);
routes.post("/ongs", ongsController.create);

routes.get("/profile", profileController.index);

routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.remove);

routes.post("/login", loginController.index);

module.exports = routes;
