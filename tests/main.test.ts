const Aeneas = require("../build/");

describe("Create AeneasClient and verify ClientOptions", () => {
	it("Should abort because of missing ClientOptions", async () => {
		expect(() => new Aeneas.Client()).toThrow(/apiUrl/);
		expect(() => new Aeneas.Client({apiUrl:"test"})).toThrow(/apiKey/);
	});
});
