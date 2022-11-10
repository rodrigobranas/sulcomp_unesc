import CalculateInvoice from "./CalculateInvoice";
import Http from "./Http";

export default class TransactionController {

	constructor (
		readonly http: Http, 
		readonly calculateInvoice: CalculateInvoice,
		readonly today: Date
	) {
		http.on("get", "/cards/:cardNumber/invoices", async function (params: any, body: any) {
			const month = today.getMonth() + 1;
			const year = today.getFullYear();
			return calculateInvoice.execute(params.cardNumber, month, year);
		});
	}
}