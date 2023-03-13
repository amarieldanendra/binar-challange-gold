import React from "react";

const Paket = (props) => {
    return (
        <div>
            <div className="container">
        <div className=" card border shadow border-2 rounded-3">
            <span className="card-title p-text px-5 pt-3">Pencairanmu</span>
            <div className="row p-3 text-center">
                <div className="col">
                    <div className="d-inline-flex flex-column">
                        <span className="text-detail p-2 text-detail p-2 text-start">Nama Mobil</span>
                        <div className="d-inline-flex flex-row shadow bg-detail">   
                            <div className="p-1">
                                <input type="text" name="todoListName" className="bg-detail border border-0"/>
                            </div>
                            <div className="p-1">
                                
                                <input onclick="myFunction()" type="image" src="./assets/Vector (1).png" alt="Submit" className="px-1 dropbtn border border-0"/>
                                
                                <div id="myDropdown" className="dropdown-content">
                                    <div className="p-1">item1</div>
                                    <div className="p-1">item2</div>
                                    <div className="p-1">item3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-inline-flex flex-column">
                        <span className="text-detail p-2 text-detail p-2 text-start">Kategori</span>
                        <div className="d-inline-flex flex-row shadow bg-detail">   
                            <div className="p-1">
                                <input type="text" name="todoListName" className="border border-0 bg-detail"/>
                            </div>
                            <div className="p-1">
                               
                                <input type="image" src="./assets/fi_calendar.png" alt="..." className="px-1 dropbtn border border-0"/>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-inline-flex flex-column">
                        <span className="text-detail p-2 text-detail p-2 text-start">Harga Sewa per Hari</span>
                        <div className="d-inline-flex flex-row shadow bg-detail">   
                            <div className="p-1">
                                <input type="text" name="todoListName" className="border border-0 bg-detail"/>
                            </div>
                            <div className="p-1">
                                
                                <input type="image" src="./assets/fi_clock.png" alt="..." className="px-1 dropbtn border border-0"/>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-inline-flex flex-column">
                        <span className="text-detail p-2 text-detail p-2 text-start">Status</span>
                        <div className="d-inline-flex flex-row shadow bg-detail">   
                            <div className="p-1">
                                <input type="text" name="todoListName" className="border border-0 bg-detail"/>
                            </div>
                            <div className="p-1">
                               
                                <input type="image" src="./assets/fi_users.png" alt="..." className="px-1 dropbtn border border-0"/>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row gap-3">
            <div className="col-8 py-4">
                <div className="card shadow">
                    <div className="card-body">
                        <p className="p-text">Tentang Paket</p>
                        <div className="d-flex flex-column">
                            <div className="py-2">
                                <span className="p-2 p-text">Include</span>
                                <ul className="text-detail-li">
                                    <li>
                                        Apa saja yang termasuk dalam paket misal durasi max 12 jam
                                    </li>
                                    <li>
                                        Sudah termasuk bensin selama 12 jam
                                    </li>
                                    <li>
                                        Sudah termasuk Tiket Wisata
                                    </li>
                                    <li>
                                        Sudah termasuk pajak
                                    </li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <span className="p-text">Exclude</span>
                                <ul className="text-detail-li">
                                    <li>
                                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>
                                        Tidak termasuk akomodasi penginapan
                                    </li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <span className="p-text">Refund, Reschedule, Overtime</span>
                                <ul className="text-detail-li">
                                    <li>
                                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>
                                        Tidak termasuk akomodasi penginapan
                                    </li>
                                    <li>
                                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>
                                        Tidak termasuk akomodasi penginapan
                                    </li>
                                    <li>
                                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>
                                        Tidak termasuk akomodasi penginapan
                                    </li>
                                </ul>
                            </div>
        
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col py-4">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/image 1.png" className="img-fluid py-5" alt="Pict_alt"/>
                        </div>
                        <span className="p-text px-2">Inova</span>
                        <div className="d-flex">
                            <div className="mx-2">
                                <img src="./assets/fi_users.png" className="img-fluid mb-2" alt="Pict-alt"/>
                            </div>
        
                            <div className="p-text-10 py-1">6 - 8 orang</div>
                            
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="p-2">Total</div>
                            <div className="p-2 p-text">Rp. 500.000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Paket;
