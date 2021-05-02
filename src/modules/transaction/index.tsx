import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {TransactionInterface} from "../../interfaces/transaction";
import {default as Card} from "../../components/Transaction";
import {filterTransaction, sortBy, sortingTransaction, toIdrCurrency} from "../../utils/helper";
import SearchWrapper from "../../components/SearchWrapper";

const List: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [grandTotalTransaction, setGrandTotalTransaction] = useState<number>(0);
    const [listTransaction, setListTransactions] = useState<TransactionInterface[]>([]);
    const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [filter, setFilter] = useState<string>("");
    const [sortedBy, setSortedBy] = useState<string>("");

    useEffect(() => {
        setErrorMessage('');
        setIsLoading(true);
        axios.get('https://nextar.flip.id/frontend-test').then((res) => {
            const {data} = res;
            const resToArray: TransactionInterface[] = Object.values(data);
            const granTotal = resToArray.reduce((acc, {amount}) => {
                return acc + amount
            }, 0);
            setListTransactions(resToArray);
            setTransactions(resToArray);
            setGrandTotalTransaction(granTotal);
        }).catch((err) => {
            setErrorMessage(err.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        let setData: TransactionInterface[] = [...transactions];
        setData = filterTransaction(setData, filter);
        setData = sortingTransaction(setData, sortedBy);
        setListTransactions(setData);
    }, [sortedBy, filter])

    const handleChangeSort = (value: string) => {
        setSortedBy(value);
    }

    const handleChangeSearch = (value: string) => {
        setFilter(value);
    }

    return (
        <>
            <h1 className="title">Daftar Transaksi</h1>
            <div className="info">
                <h3 className="subtitle">Halo kak!</h3>
                <p>
                    Kamu telah melakukan transaksi sebesar{' '}
                    <span className="text-primary"
                          style={{fontWeight: 'bold'}}>{toIdrCurrency(grandTotalTransaction)}</span>
                    {' '}sejak menggunakan Flip.
                </p>
            </div>

            <SearchWrapper onChangeSort={handleChangeSort}
                           onChangeSearch={handleChangeSearch}
                           filterValue={filter}
                           sortValue={sortedBy}
            />

            {isLoading ? (
                <div style={{textAlign: "center"}}>
                    <h5>Loading ...</h5>
                </div>
            ) : (
                <>
                    {errorMessage ? (
                        <div>{errorMessage}</div>
                    ) : (
                        <>
                            {listTransaction?.map((value) => (
                                <Card key={value.id} {...value} />
                            ))}
                        </>
                    )}
                </>
            )}
        </>)
}
export default List;