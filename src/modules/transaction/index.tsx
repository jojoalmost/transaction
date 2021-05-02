import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {TransactionInterface} from "../../interfaces/transactionInterface";
import Transaction from "../../components/Transaction";
import {toIdrCurrency} from "../../utils/helper";

const List: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [grandTotalTransaction, setGrandTotalTransaction] = useState<number>(0);
    const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

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
            setGrandTotalTransaction(granTotal);
        }).catch((err) => {
            setErrorMessage(err.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <>
            <h1 className="title">Daftar Transaksi</h1>
            <h3>Halo kak!</h3>
            <p>Kamu telah melakukan transaksi sebesar <span>{toIdrCurrency(grandTotalTransaction)}</span> sejak menggunakan Flip.</p>
            <div>
                <input type="text"/>
            </div>

            {isLoading ? (
                <>
                    <h5>Loading ...</h5>
                </>
            ) : (
                <>
                    {transactions?.map((value) => (
                        <Transaction key={value.id} {...value} />
                    ))}
                </>
            )}
        </>)
}
export default List;