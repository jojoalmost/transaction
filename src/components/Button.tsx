import React, {FC} from "react";
import {TransactionStatus} from "../interfaces/transactionInterface";

const CardButton: FC<TransactionStatus> = ({status, children}) => {
    switch (status) {
        case "PENDING":
            return (
                <button className="btn btn-primary">Pengecekan</button>
            )
        case "SUCCESS":
            return (
                <button className="btn btn-success">Berhasil</button>
            )
        default:
            return null;
    }
}
export default CardButton