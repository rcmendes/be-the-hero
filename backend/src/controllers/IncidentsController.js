const connection = require("../database/connection");

const index = async (request, response) => {
	const { page = 1 } = request.query;
	const { limit = 5 } = request.query;

	const [result] = await connection("incidents").count();
	const count = result["count(*)"];

	const list = await connection("incidents")
		.join("ongs", "ongs.id", "=", "incidents.ong_id")
		.limit(limit)
		.offset((page - 1) * limit)
		.select([
			"incidents.*",
			"ongs.name",
			"ongs.email",
			"ongs.whatsapp",
			"ongs.state",
			"ongs.city"
		]);

	response.header("X-Total-Count", count);
	response.header("X-Page-Limit", limit);

	response.json(list);
};

const create = async (request, response) => {
	const ong_id = request.headers.authorization;

	if (!ong_id) {
		return response.status(400).json({
			error: "ONG's ID must be informed on Authorization header."
		});
	}

	const { title, description, value } = request.body;

	const [id] = await connection("incidents").insert({
		title,
		description,
		value,
		ong_id
	});

	response.status(201).json({
		id
	});
};

const remove = async (request, response) => {
	const { id } = request.params;
	const ong_id = request.headers.authorization;

	if (!ong_id) {
		return response.status(400).json({
			error: "ONG's ID must be informed on Authorization header."
		});
	}

	const incident = await connection("incidents")
		.select("ong_id")
		.where({ id })
		.first();

	if (!incident) {
		return response.status(404).json({ error: "Incident was not found." });
	}

	if (incident.ong_id !== ong_id) {
		return response.status(401).json({ error: "Operation not allowed." });
	}

	await connection("incidents")
		.where({ id })
		.delete();

	return response.status(204);
};
module.exports = {
	index,
	create,
	remove
};
