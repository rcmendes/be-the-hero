const { v4: uuid } = require("uuid");

const connection = require("../database/connection");

const index = async (_request, response) => {
	const list = await connection("ongs").select("*");

	return response.json(list);
};

const create = async (request, response) => {
	const { name, email, whatsapp, city, state } = request.body;

	const id = uuid();

	await connection("ongs").insert({
		id,
		name,
		email,
		whatsapp,
		state,
		city
	});

	return response.status(201).json({
		id
	});
};

module.exports = {
	index,
	create
};
