import { Product } from '../app/shared/model/product';
import { Stock } from '../app/shared/model/stock';
import { Transaction } from '../app/shared/model/transaction';
import { Warehouse } from '../app/shared/model/warehouse';

export const dbProduct: {[key: number]: Product} = {
    1: {
        id: 1,
        name: 'Banana',
    },
    2: {
        id: 1,
        name: 'Papaya',
    },
    3: {
        id: 1,
        name: 'Mango',
    },
    4: {
        id: 1,
        name: 'Apple',
    },
    5: {
        id: 1,
        name: 'Grape',
    },
};

export const dbStock: {[key: number]: Stock} = {
    1: {
        id: 1,
        productID: 1,
        warehouseID: 1,
        amount: 3,
        lastUpdated: new Date().getTime(),
        transactionIDs: [1, 2],
    },
    2: {
        id: 2,
        productID: 2,
        warehouseID: 1,
        amount: 4,
        lastUpdated: new Date().getTime(),
        transactionIDs: [3, 4],

    },
    3: {
        id: 3,
        productID: 3,
        warehouseID: 1,
        amount: 6,
        lastUpdated: new Date().getTime(),
        transactionIDs: [5, 6],
    }
};

export const dbTransaction: {[key: number]: Transaction} = {
    1: {
        id: 1,
        date: new Date().getTime(),
        productID: 1,
        amount: 1,
        operation: 'ADD',
        warehouseID: 1,
        comment: 'First Ever Transaction',
        timestamp: new Date().getTime(),
    },
    2: {
        id: 2,
        date: new Date().getTime(),
        productID: 1,
        amount: 1,
        operation: 'ADD',
        warehouseID: 1,
        comment: 'Second comment',
        timestamp: new Date().getTime(),

    },
    3: {
        id: 3,
        date: new Date().getTime(),
        productID: 2,
        amount: 2,
        operation: 'ADD',
        warehouseID: 1,
        comment: '',
        timestamp: new Date().getTime(),
    },
    4: {
        id: 4,
        date: new Date().getTime(),
        productID: 2,
        amount: 2,
        operation: 'ADD',
        warehouseID: 1,
        comment: '',
        timestamp: new Date().getTime(),
    },
    5: {
        id: 5,
        date: new Date().getTime(),
        productID: 3,
        amount: 3,
        operation: 'ADD',
        warehouseID: 1,
        comment: '',
        timestamp: new Date().getTime(),
    },
    6: {
        id: 6,
        date: new Date().getTime(),
        productID: 3,
        amount: 3,
        operation: 'ADD',
        warehouseID: 1,
        comment: '',
        timestamp: new Date().getTime(),
    }
};

export const dbWarehouse: {[key: number]: Warehouse} = {
    1: {
        id: 1,
        name: 'Main Bodega',
        timestamp: new Date().getTime(),
        transactionIDs: [1, 2, 3 , 4, 5, 6],
    },
    2: {
        id: 1,
        name: 'Colorado',
        timestamp: new Date().getTime(),
        transactionIDs: [],
    },
};

