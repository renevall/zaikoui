export interface Transaction {
    id: number;
    date: number;
    productID: number;
    amount: number;
    operation: string;
    warehouseID: number;
    comment: string;
    timestamp: number;
}
