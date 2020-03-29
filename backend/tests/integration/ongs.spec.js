const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONGs", () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it("should create a new ONG", async () => {
		const response = await request(app)
			.post("/ongs")
			.send({
				name: "ONG 1",
				email: "contact@ong.org",
				whatsapp: "61222222222",
				state: "QC",
				city: "Montreal"
			});

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty("id");
		expect(response.body.id).toHaveLength(36);
	});
});
