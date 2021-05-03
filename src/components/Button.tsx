import React, {FC} from "react";
import {TransactionStatus} from "../interfaces/transaction";

interface InterfaceProps{
    status: TransactionStatus
    onClick: () => void
}
const CardButton: FC<InterfaceProps> = ({status, onClick}) => {
    switch (status) {
        case "PENDING":
            return (
                <button
                    type="button"
                    onClick={onClick}
                    className="btn btn-primary"
                >
                    Pengecekan
                </button>
            )
        case "SUCCESS":
            return (
                <button
                    type="button"
                    onClick={onClick}
                    className="btn btn-success"
                >
                    Berhasil
                </button>
            )
        default:
            return null;
    }
}
export default CardButton
