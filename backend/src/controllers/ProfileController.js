const connection = require("../database/connection");

const index = async (_request, response) => {
	const { id } = request.params;
	const ong = await connection("ongs")
		.select("*")
		.where({ id });

	return response.json(ong);
};

module.exports = {
	index
};
