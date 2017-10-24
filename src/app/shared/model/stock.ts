export interface Stock {
    id: number;
    productID: number;
    warehouseID: number;
    amount: number;
    lastUpdated: number;
    transactionIDs: number[];
}
