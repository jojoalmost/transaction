import React, {FC, useEffect, useState} from "react";
import {useTransactions} from "./utils/TransactionContext";
import {TransactionInterface} from "../../interfaces/transaction";
import {default as Card} from "../../components/Transaction";
import {filterTransaction, sortingTransaction, toIdrCurrency} from "../../utils/helper";
import SearchWrapper from "../../components/SearchWrapper";

const List: FC = () => {
    const [listTransaction, setListTransactions] = useState<TransactionInterface[]>([]);
    const [filter, setFilter] = useState<string>("");
    const [sortedBy, setSortedBy] = useState<string>("");
    const {
        isLoading,
        errorMessage,
        transactions,
        grandTotal,
    } = useTransactions();

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
                          style={{fontWeight: 'bold'}}>{toIdrCurrency(grandTotal)}</span>
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
                            {listTransaction.length > 0 ? listTransaction?.map((value) => (
                                <Card key={value.id} {...value} />
                            )) : (
                                <div style={{textAlign: "center"}}>
                                    <h5>Pencarian dengan kata <span>{filter}</span> tidak ditemukan</h5>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </>)
}
export default List;
