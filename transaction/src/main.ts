import PgPromiseAdapter from "./PgPromiseAdapter";
import TransactionsDAODatabase from "./TransactionsDAODatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import CalculateInvoice from "./CalculateInvoice";
import TransactionController from "./TransactionController";
import ExpressAdapter from "./ExpressAdapter";

const today = new Date();
const connection = new PgPromiseAdapter();
const transactionsDAO = new TransactionsDAODatabase(connection);
const currencyGateway = new CurrencyGatewayHttp();
const calculateInvoice = new CalculateInvoice(transactionsDAO, currencyGateway);
const http = new ExpressAdapter();
new TransactionController(http, calculateInvoice, today);
http.listen(3000);
