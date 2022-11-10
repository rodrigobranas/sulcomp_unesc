import CalculateInvoice from "../src/CalculateInvoice";
import CurrencyGateway from "../src/CurrencyGateway";
import TransactionsDAO from "../src/TransactionsDAO";

test("Deve testar o calculo da fatura", async function () {
	const transactionsDAO: TransactionsDAO = {
		async getTransactions (cardNumber: string, month: number, year: number): Promise<any> {
			return [
				{ amount: 10, currency: "BRL" },
				{ amount: 10, currency: "USD" }
			];
		}
	};
	const currencyGateway: CurrencyGateway = {
		async getCurrencies (): Promise<any> {
			return {
				usd: 2
			}
		}
	};
	const calculateInvoice = new CalculateInvoice(transactionsDAO, currencyGateway);
	const output = await calculateInvoice.execute("1234", 11, 2022);
	expect(output.total).toBe(30);
});
