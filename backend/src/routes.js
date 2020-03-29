const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const routes = express.Router();

const ongsController = require("./controllers/OngsController");
const profileController = require("./controllers/ProfileController");
const incidentsController = require("./controllers/IncidentsController");
const loginController = require("./controllers/LoginController");

routes.get("/ongs", ongsController.index);
routes.post(
	"/ongs",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required(),
			email: Joi.string()
				.required()
				.email(),
			whatsapp: Joi.string()
				.min(10)
				.max(11),
			city: Joi.string().required(),
			state: Joi.string()
				.required()
				.length(2)
		})
	}),
	ongsController.create
);

routes.get(
	"/profile",
	celebrate({
		[Segments.HEADERS]: Joi.object()
			.keys({
				authorization: Joi.string()
					.required()
					.uuid()
			})
			.unknown()
	}),
	profileController.index
);

routes.post("/incidents", incidentsController.create);
routes.get("/incidents", incidentsController.index);
routes.delete(
	"/incidents/:id",
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			id: Joi.number().required()
		})
	}),
	incidentsController.remove
);

routes.post("/login", loginController.index);

module.exports = routes;
