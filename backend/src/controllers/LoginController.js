const connection = require("../database/connection");

const index = async (request, response) => {
	const { id } = request.body;

	const data = await connection("ongs")
		.select("name")
		.where({ id })
		.first();

	if (!data) {
		return response
			.status(404)
			.json({ error: `ONG with ID <${id}> was not found.` });
	}

	return response.json({ name: data.name });
};

module.exports = {
	index
};
