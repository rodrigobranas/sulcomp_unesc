import Connection from "./Connection";
import TransactionsDAO from "./TransactionsDAO";

export default class TransactionsDAODatabase implements TransactionsDAO {
	
	constructor (readonly connection: Connection) {
	}
	
	async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
		return this.connection.query("select * from branas.card_transaction where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3", [cardNumber, month, year]);
	}

}