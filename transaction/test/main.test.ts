import axios from "axios";

test("Deve testar a API de transações", async function () {
	const response = await axios.get("http://localhost:3000/cards/1234/invoices");
	const output = response.data;
	expect(output.transactions).toHaveLength(3);
	expect(output.total).toBe(1050);
});
