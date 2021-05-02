import React, {FC, useEffect, useState} from "react";
import Button from "../../components/Button";
import {useHistory, useParams} from "react-router-dom";
import {ReactComponent as Harddrive} from "../../assets/harddrive.svg";
import {dateToLocaleString, toIdrCurrency} from "../../utils/helper";
import {TransactionInterface, TransactionStatus} from "../../interfaces/transaction";

const Detail: FC = props => {
    const [transaction, setTransaction] = useState<TransactionInterface>({
        account_number: '',
        amount: 0,
        beneficiary_bank: '',
        beneficiary_name: '',
        completed_at: '',
        created_at: '',
        fee: 0,
        id: '',
        remark: '',
        sender_bank: '',
        status: 'SUCCESS',
        unique_code: 0,
    });
    const history = useHistory();
    // const {id} = useParams();
    useEffect(() => {

    }, []);
    return (
        <>
            <h1 className="title">Detail Transaksi</h1>
            <div className="card-detail-info" style={{alignItems: "center", marginBottom: 16}}>
                <div className="text-uppercase" style={{flex: 1, fontWeight: 600}}>
                    id transaksi: #{transaction?.id}
                </div>
                <div>
                    <Button status={"SUCCESS"}
                            onClick={() => history.push("")}/>
                </div>
            </div>

            <div className="card-detail-info" style={{marginBottom: 16}}>
                <div style={{paddingRight: 16}}><Harddrive width={50} height={50} fill="#fd6542"/></div>
                <div>
                    <div className="detail-info">
                        <h5>Pengirim</h5>
                        <div>{transaction?.sender_bank}</div>
                    </div>

                    <div className="detail-info">
                        <h5>penerima</h5>
                        <div>{transaction?.beneficiary_bank}</div>
                        <div>{transaction?.account_number}</div>
                        <div>{transaction?.beneficiary_name}</div>
                    </div>

                    <div className="detail-info">
                        <h5>nominal</h5>
                        <div>{toIdrCurrency(transaction?.amount)}</div>
                        <div>kode unik: {transaction?.unique_code}</div>
                    </div>

                    <div className="detail-info">
                        <h5>catatan</h5>
                        <div>{transaction?.remark}</div>
                    </div>

                    <div className="detail-info">
                        <h5>waktu dibuat</h5>
                        <div>{dateToLocaleString(transaction?.created_at)}</div>
                    </div>
                </div>
            </div>

            <button type="button" onClick={() => history.push("/")} className="btn btn-outline-primary">Kembali</button>
        </>
    )
}
export default Detail;