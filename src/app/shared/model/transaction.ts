export interface Transaction {
    id: number;
    date: string;
    productID: number;
    amount: number;
    operation: string;
    warehouseID: number;
    comment: string;
    timestamp: number;
}
