import React, {FC} from "react";

const Detail: FC = props => {
    return (
        <>
            <h1 className="title">Detail Transaksi</h1>
            <div>
                <div className="text-uppercase">
                    id transaksi: #FT456
                </div>
                <div>
                    <button>Berhasil</button>
                </div>
            </div>

            <div>
                <div>Image</div>
                <div>
                    <div>Pengirim</div>
                    <div>BCA</div>

                    <div>penerima</div>
                    <div>mandiri</div>
                    <div>123456</div>
                    <div>bambang</div>

                    <div>nominal</div>
                    <div>100000</div>
                    <div>kode unik: 50</div>

                    <div>catatan</div>
                    <div>sebuah remark</div>

                    <div>waktu dibuat</div>
                    <div>1 januari 2020</div>
                </div>
            </div>

            <button>Kembali</button>
        </>
    )
}
export default Detail