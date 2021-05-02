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

type OrderType = "ASC" | "DESC";
export const sortBy = (transactions: TransactionInterface[], key: TransactionKey, orderBy: OrderType = "ASC") => {
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

export const sortingTransaction = (transactions: TransactionInterface[], filter:string) => {
    switch (filter) {
        case 'name-asc':
            return  sortBy(transactions, 'beneficiary_name');
        case "name-desc":
            return  sortBy(transactions, 'beneficiary_name', 'DESC');
        case "date-asc":
            return  sortBy(transactions, 'created_at');
        case "date-desc":
            return  sortBy(transactions, 'created_at', 'DESC');
        default:
            return transactions;
    }
}

export const filterTransaction = (transactions: TransactionInterface[], text: string) => {
    const filter = text.toLowerCase().trim();
    if (!filter) return transactions;
    return transactions.filter(({beneficiary_name, beneficiary_bank, sender_bank}) =>
        beneficiary_bank.toLowerCase().indexOf(filter) > -1 ||
        beneficiary_name.toLowerCase().indexOf(filter) > -1 ||
        sender_bank.toLowerCase().indexOf(filter) > -1
    )
}