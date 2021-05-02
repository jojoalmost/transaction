import {TransactionInterface, TransactionKey} from "../interfaces/transaction";

export const dateToLocaleString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleString('id-ID', {
        day: "numeric",
        year: "numeric",
        month: "long"
    });
}

export const toIdrCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0}).format(amount)
}

type order = "ASC" | "DESC";
export const sortBy = (transactions: TransactionInterface[], key: TransactionKey, orderBy: order = "ASC") => {
    return transactions.sort((a: TransactionInterface, b: TransactionInterface) => {
        if (orderBy === "ASC") {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        } else {
            if (a[key] > b[key]) {
                return -1;
            }
            if (a[key] < b[key]) {
                return 1;
            }
            return 0;
        }
    });
}