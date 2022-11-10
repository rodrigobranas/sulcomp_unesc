export default class InvoiceCalculator {

	static calculate (transactions: any, currencies: any) {
		let total = 0;
		for (const transaction of transactions) {
			if (transaction.currency === "BRL") {
				total += parseFloat(transaction.amount);
			}
			if (transaction.currency === "USD") {
				total += parseFloat(transaction.amount) * currencies.usd;
			}
		}
		return total;
	}
}