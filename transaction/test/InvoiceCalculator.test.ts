import InvoiceCalculator from "../src/InvoiceCalculator";

test("Deve calcular as faturas", function () {
	const transactions = [
		{ amount: 10, currency: "BRL" },
		{ amount: 20, currency: "USD" }
	];
	const currencies = {
		usd: 2
	};
	const total = InvoiceCalculator.calculate(transactions, currencies);
	expect(total).toBe(50);
});