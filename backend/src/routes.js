const express = require("express");

const routes = express.Router();

const ongsController = require("./controllers/OngsController");
const profileController = require("./controllers/ProfileController");
const incidentsController = require("./controllers/IncidentsController");

routes.get("/ongs", ongsController.index);
routes.post("/ongs", ongsController.create);

routes.get("/profile", profileController.index);

routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.remove);

module.exports = routes;
