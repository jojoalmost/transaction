import React, {createContext, FC, useContext, useEffect, useState} from "react";
import axios from "axios";
import {TransactionContextObject, TransactionInterface} from "../../../interfaces/transaction";

const initialValue: TransactionContextObject = {
    isLoading: true,
    errorMessage: '',
    transactions: [],
    grandTotal: 0,
    transactionDetail: undefined,
}

const TransactionContext = createContext<TransactionContextObject>(initialValue);

const TransactionsProvider: FC = ({children}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
    const [grandTotal, setGrandTotal] = useState<number>(0);

    const transactionDetail = (transactionId: string) => {
        const [find] = transactions.filter(({id}) => id === transactionId);
        return find;
    }

    useEffect(() => {
        setErrorMessage('');
        setIsLoading(true);
        axios.get('https://nextar.flip.id/frontend-test').then((res) => {
            const {data} = res;
            const resToArray: TransactionInterface[] = Object.values(data);
            const granTotal = resToArray.reduce((acc, {amount}) => {
                return acc + amount
            }, 0);
            setTransactions(resToArray);
            setGrandTotal(granTotal);
        }).catch((err) => {
            setErrorMessage(err.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <div style={{textAlign: "center"}}>
                <h5>Loading ...</h5>
            </div>
        )
    }

    return (
        <TransactionContext.Provider value={{
            isLoading,
            errorMessage,
            transactions,
            grandTotal,
            transactionDetail,
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
export default TransactionsProvider;
export const useTransactions = () => useContext(TransactionContext);
