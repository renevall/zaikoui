import { Transaction } from '../model/transaction';
import { Warehouse } from '../model/warehouse';
import { Stock } from '../model/stock';

export interface AllProductData {
    transactions: Transaction[];
    warehouses: Warehouse[];
    stocks: Stock[];
}
