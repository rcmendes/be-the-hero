const connection = require("../database/connection");

const index = async (request, response) => {
	const id = request.headers.authorization;
	const incidents = await connection("incidents")
		.select("*")
		.where({ ong_id: id });

	return response.json(incidents);
};

module.exports = {
	index
};
