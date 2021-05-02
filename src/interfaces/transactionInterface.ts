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
    status: 'PENDING' | 'SUCCESS'
    unique_code: number
}

export interface TransactionStatus{
    status: 'PENDING' | 'SUCCESS'
}