import React, {FC} from "react";
import Button from "../../components/Button";
import {useHistory} from "react-router-dom";
import {ReactComponent as Harddrive} from "../../assets/harddrive.svg";
import {toIdrCurrency} from "../../utils/helper";

const Detail: FC = props => {
    const history = useHistory();
    return (
        <>
            <h1 className="title">Detail Transaksi</h1>
            <div className="card-detail-info" style={{alignItems: "center", marginBottom: 16}}>
                <div className="text-uppercase" style={{flex: 1, fontWeight: 600}}>
                    id transaksi: #FT456
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
                        <div>BCA</div>
                    </div>

                    <div className="detail-info">
                        <h5>penerima</h5>
                        <div className="text-capitalize">mandiri</div>
                        <div>123456</div>
                        <div>bambang</div>
                    </div>

                    <div className="detail-info">
                        <h5>nominal</h5>
                        <div>{toIdrCurrency(100000)}</div>
                        <div>kode unik: 50</div>
                    </div>

                    <div className="detail-info">
                        <h5>catatan</h5>
                        <div>sebuah remark</div>
                    </div>

                    <div className="detail-info">
                        <h5>waktu dibuat</h5>
                        <div>1 januari 2020</div>
                    </div>
                </div>
            </div>

            <button type="button" onClick={() => history.push("/")} className="btn btn-outline-primary">Kembali</button>
        </>
    )
}
export default Detail;