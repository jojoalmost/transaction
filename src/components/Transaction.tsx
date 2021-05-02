import {TransactionInterface} from "../interfaces/transaction";
import React, {FC} from "react";
import {dateToLocaleString, toIdrCurrency} from "../utils/helper";
import CardButton from "./Button";

const Transaction: FC<TransactionInterface> = ({
                                                   sender_bank,
                                                   beneficiary_bank,
                                                   beneficiary_name,
                                                   amount,
                                                   created_at,
                                                   status
                                               }) => {
    return (
        <div className={`card ${status === 'SUCCESS' ? 'success' : 'primary'}`}>
            <div style={{flex: 1, alignItems: "center", lineHeight: "22px"}}>
                <div className="bank-name">
                    <span className="text-uppercase" style={{fontWeight: "bold"}}>{sender_bank}</span>
                    <span className="text-uppercase" style={{fontWeight: "bold"}}>{beneficiary_bank}</span>
                </div>
                <div className="text-uppercase">{beneficiary_name}</div>
                <div className="description">
                    <span>{toIdrCurrency(amount)}</span>
                    <span>{dateToLocaleString(created_at)}</span></div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CardButton status={status}/>
            </div>
        </div>
    )
}
export default Transaction