import React, {FC, useCallback, useEffect, useState} from "react";
import axios from "axios";
import {TransactionInterface} from "../../interfaces/transaction";
import {default as Card} from "../../components/Transaction";
import {sortBy, toIdrCurrency} from "../../utils/helper";
import SearchWrapper from "../../components/SearchWrapper";

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

    const handleChangeSort = (value: string) => {
        let sortedData: TransactionInterface[] = [...transactions];
        switch (value) {
            case 'name-asc':
                sortedData = sortBy(sortedData, 'beneficiary_name');
                break;
            case "name-desc":
                sortedData = sortBy(sortedData, 'beneficiary_name', 'DESC');
                break;
            case "date-asc":
                sortedData = sortBy(sortedData, 'created_at');
                break;
            case "date-desc":
                sortedData = sortBy(sortedData, 'created_at', 'DESC');
                break;
            default:
                break;
        }
        console.log(sortedData);
        setTransactions(sortedData);
    }

    return (
        <>
            <h1 className="title">Daftar Transaksi</h1>
            <div>
                <h3 className="subtitle">Halo kak!</h3>
                <p>
                    Kamu telah melakukan transaksi sebesar{' '}
                    <span className="text-primary"
                          style={{fontWeight: 'bold'}}>{toIdrCurrency(grandTotalTransaction)}</span>
                    {' '}sejak menggunakan Flip.
                </p>
            </div>

            <SearchWrapper onChangeSort={handleChangeSort}/>

            {isLoading ? (
                <>
                    <h5>Loading ...</h5>
                </>
            ) : (
                <>
                    {transactions?.map((value) => (
                        <Card key={value.id} {...value} />
                    ))}
                </>
            )}
        </>)
}
export default List;