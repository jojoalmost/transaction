export type TransactionStatus = 'PENDING' | 'SUCCESS';

export interface TransactionInterface {
    account_number: string
    amount: number
    beneficiary_bank: string
    beneficiary_name: string
    completed_at: string
    created_at: string
    fee: number
    id: string
    remark: string
    sender_bank: string
    status: TransactionStatus
    unique_code: number
}

export type TransactionKey = keyof TransactionInterface;


export interface TransactionContextObject {
    isLoading: boolean;
    errorMessage: string;
    transactions: TransactionInterface[];
    grandTotal: number;
    transactionDetail?: (transactionId: string) => TransactionInterface;
}
