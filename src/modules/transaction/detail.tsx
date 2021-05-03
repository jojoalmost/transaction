import React, {FC} from "react";
import Button from "../../components/Button";
import {useHistory, useParams} from "react-router-dom";
import {ReactComponent as Harddrive} from "../../assets/harddrive.svg";
import {dateToLocaleString, toIdrCurrency} from "../../utils/helper";
import {useTransactions} from "./utils/TransactionContext";

const Detail: FC = () => {
    const history = useHistory();
    const {id: transactionId} = useParams<any>();
    const {transactionDetail} = useTransactions();
    if (transactionDetail && transactionDetail(transactionId)) {
        const {
            account_number,
            amount,
            beneficiary_bank,
            beneficiary_name,
            completed_at,
            created_at,
            fee,
            id,
            remark,
            sender_bank,
            status,
            unique_code,
        } = transactionDetail(transactionId);

        return (
            <>
                <h1 className="title">Detail Transaksi</h1>
                <div className="card-detail-info" style={{alignItems: "center", marginBottom: 16}}>
                    <div className="text-uppercase" style={{flex: 1, fontWeight: 600}}>
                        id transaksi: #{id}
                    </div>
                    <div>
                        <Button status={status}
                                onClick={() => history.push("")}/>
                    </div>
                </div>

                <div className="card-detail-info" style={{marginBottom: 16}}>
                    <div style={{paddingRight: 16}}><Harddrive width={50} height={50} fill="#fd6542"/></div>
                    <div>
                        <div className="detail-info">
                            <h5>Pengirim</h5>
                            <div>{sender_bank}</div>
                        </div>

                        <div className="detail-info">
                            <h5>penerima</h5>
                            <div>{beneficiary_bank}</div>
                            <div>{account_number}</div>
                            <div>{beneficiary_name}</div>
                        </div>

                        <div className="detail-info">
                            <h5>nominal</h5>
                            <div>{toIdrCurrency(amount)}</div>
                            <div>kode unik: {unique_code}</div>
                        </div>

                        <div className="detail-info">
                            <h5>catatan</h5>
                            <div>{remark}</div>
                        </div>

                        <div className="detail-info">
                            <h5>waktu dibuat</h5>
                            <div>{dateToLocaleString(created_at)}</div>
                        </div>
                    </div>
                </div>

                <button type="button" onClick={() => history.push("/")} className="btn btn-outline-primary">Kembali
                </button>
            </>
        )
    }
    return (
        <>
            <h1 className="title">Transaksi tidak ditemukan</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{display: "block", width: "80%"}} type="button" onClick={() => history.push("/")}
                        className="btn btn-outline-primary">
                    Kembali
                </button>
            </div>
        </>
    );
}
export default Detail;
