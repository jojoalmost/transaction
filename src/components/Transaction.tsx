import {TransactionInterface} from "../interfaces/transactionInterface";
import React, {FC} from "react";
import {dateToLocaleString, toIdrCurrency} from "../utils/helper";

const Transaction: FC<TransactionInterface> = ({sender_bank, beneficiary_bank, beneficiary_name, amount,created_at}) => {
    return (
        <>
            <div>
                <div>{sender_bank} {beneficiary_bank}</div>
                <div>{beneficiary_name}</div>
                <div>{toIdrCurrency(amount)} {dateToLocaleString(created_at)}</div>
            </div>
            <div>
                <button>Berhasil</button>
            </div>
        </>
    )
}
export default Transaction