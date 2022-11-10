export default interface TransactionsDAO {
	getTransactions (cardNumber: string, month: number, year: number): Promise<any>;
}
