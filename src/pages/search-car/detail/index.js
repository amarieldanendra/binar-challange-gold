import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../../component/Form.js";
import Input from "../../../component/Input.js";
import SelectBox from "../../../component/Selectbox.js";
import { fetchApi } from "../../../config/services.js";

const carSize = {
    small : "2-4 orang",
    medium : "4-6 orang",
    large : "6-8 orang"
}

const DetailCar = (props) => {

    const [data, setData] = useState(null);
    const [loader, setLoader] = useState("idle")
    const {id} = useParams()
    const fetchingMobil = useCallback((params = null) => {
        setLoader("fetching")
        fetchApi(
            `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`,
            params
        ).then((result) => {
            setData(result.data);
            setLoader("resolve")
        });
    }, [id]);
    useEffect(() => {
    fetchingMobil();
    }, [fetchingMobil]);

    const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
    return (
        <div>
            <div className="space-header"></div>
            <div className="contains-box">
                <div className="card shadow">
                    <div className="card-body">
                    <Form className="d-flex gap-3 justify-content-evenly">
                        <Input
                        disabled={true}
                        placeholder="Masukan Nama/Tipe Mobil"
                        className="text-detail form-control"
                        name="carName"
                        label={"Nama Mobil"}
                        />
                        <SelectBox
                        disabled={true}
                        name="kapasitas"
                        title="Masukan Kapasitas Mobil"
                        label="Kategori"
                        />
                        <SelectBox
                        disabled={true}
                        name="harga"
                        title="Masukan Harga Sewa"
                        label="Harga Sewa"
                        />
                        <SelectBox
                        disabled={true}
                        name="status"
                        title="Masukan Status Mobil"
                        label="Status"
                        />
                    </Form>
                    </div>
                </div>
            </div>
            {loader !== "resolve" && <div className="contains-box contains-car text-center">
                <div className="spinner-border text-dark mt-4" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                </div>}
            {loader === "resolve" && <div className="contains-box contains-car">
                <div className="row mt-4">
                    <div className="col-md-7">
                        <div className="card p-4">
                            <div className="title pb-4">
                                <h6>Tentang Paket</h6>
                            </div>
                            <div className="body">
                                <h6>Includes</h6>
                                <ul>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam.</li>
                                    <li> Sudah termasuk bensin selama 12 jam.</li>
                                    <li>Sudah termasuk Tiket Wisata.</li>
                                    <li>Sudah termasuk pajak.</li>
                                </ul>
                            </div>
                            <div className="body">
                                <h6>Exclude</h6>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam .</li>
                                    <li>Tidak termasuk akomodasi penginapan.</li>
                                </ul>
                            </div>
                            <div className="body">
                                <h6>Refund, Reschedule, Overtime</h6>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                    <li>Tidak termasuk akomodasi penginapan.</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                    <li> Tidak termasuk akomodasi penginapan.</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                    <li>Tidak termasuk akomodasi penginapan.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card card-size d-flex flex-column p-4 mt-0">
                            <img className="img-max-contain" src={data?.image} alt="pict-car" />
                            <div className="py-4">
                                <div className="py-1" style={{ fontSize: "14px", fontWeight: 700 }}>{data?.name}</div>
                                <div className="py-1" style={{ fontSize: "10px", color: "#8A8A8A" }}>
                                    <i className='fa fa-users'></i> {carSize[data?.category]}
                                </div>
                                <div className="d-flex justify-content-between py-1">
                                    <div style={{ fontSize: "14px", fontWeight: 700 }}>Total</div>
                                    <div style={{ fontSize: "14px", fontWeight: 700 }}>{formatNumber(data?.price)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default DetailCar;
