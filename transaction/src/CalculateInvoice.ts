import CurrencyGateway from "./CurrencyGateway";
import InvoiceCalculator from "./InvoiceCalculator";
import TransactionsDAO from "./TransactionsDAO";

export default class CalculateInvoice {

	constructor (
		readonly transactionsDAO: TransactionsDAO,
		readonly currencyGateway: CurrencyGateway
	) {
	}

	async execute (cardNumber: string, month: number, year: number) {
		const transactions = await this.transactionsDAO.getTransactions(cardNumber, month, year);
		const currencies = await this.currencyGateway.getCurrencies();
		const total = InvoiceCalculator.calculate(transactions, currencies);
		return {
			transactions,
			total
		}
	}
}