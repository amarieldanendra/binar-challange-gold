import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../component/Form.js";
import Input from "../../component/Input.js";
import SelectBox from "../../component/Selectbox.js";
import { fetchApi } from "../../config/services.js";

const categoryData = [
  {
    value: "small",
    label: "2 - 4 Orang",
  },
  {
    value: "medium",
    label: "4 - 6 Orang",
  },
  {
    value: "large",
    label: "6 - 8 Orang",
  },
];

const priceData = [
  {
    value: 400000,
    label: "< Rp.400.000",
  },
  {
    value: 600000,
    label: " Rp. 400.000 - Rp. 600.000",
  },
  {
    value: 400000,
    label: "> Rp.400.000",
  },
];

const statusData = [
  {
    value: true,
    label: "Disewa",
  },
  {
    value: false,
    label: "Tidak Disewa",
  },
];

const SearchCar = (props) => {
  const [value, setValue] = useState({
    carName: "",
    kapasitas: "",
    harga: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [flegSearch, setFlegSearch] = useState(true);
  const [backDrop, setBackDrop] = useState(false);
  document.addEventListener("click", (e) => {
    if (e.target.id === "back-drop") {
      setBackDrop(false);
    }
  });
  const navigate = useNavigate()
  const [loader, setLoader] = useState("idle")
  const [data, setData] = useState([]);
  const fetchingMobil = useCallback((params = null) => {
    setLoader("fetching")
    fetchApi("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car", params).then(
      (result) => {
        setData(result.data.cars);
        setLoader("resolve")
      }
    );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchingMobil({
      name:value.carName,
      category:value.kapasitas,
      isRented:value.status,
      minPrice:value.harga,
      maxPrice:value.harga
    })
  };
  useEffect(() => {
    fetchingMobil();
  }, [fetchingMobil]);

  const formatNumber = (number) => new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(number);
  
  const [hasilText, setHasilText] = useState([
    
  ])
  const handleHasilTextAdd = () => {
    setFlegSearch(false);
    setHasilText([...hasilText, {judulHasil: ""} ])
  }
  const handleButtonEdit = () => {
    setFlegSearch(true)
  }

  return (
    <div>
      {backDrop && <div id="back-drop" className="backdrop"></div>}
      <div className="contains-box">
        <div className="card shadow">
          <div className="card-body">
            {hasilText.map((singleText, index) => (
              <div key={index}>
                  <div className="ps-3" id="judulHasil">
                    {hasilText.length - 1 === index && hasilText.length < 99999 && (
                    <h6>Pencarianmu</h6>
                    )}
                  </div>
              </div>
            ))}
            <Form onSubmit={handleSubmit} className="d-flex gap-3 justify-content-evenly">
              <Input
                onFocus={() => {
                  setBackDrop(true);
                }}
                onChange={handleChange}
                placeholder="Masukan Nama/Tipe Mobil"
                className="text-detail form-control"
                name="carName"
                label={"Nama Mobil"}
              />
              <SelectBox
                onFocus={() => {
                  setBackDrop(true);
                }}
                onChange={handleChange}
                name="kapasitas"
                title="Masukan Kapasitas Mobil"
                label="Kategori"
                data={categoryData}
              />
              <SelectBox
                onFocus={() => {
                  setBackDrop(true);
                }}
                onChange={handleChange}
                name="harga"
                title="Masukan Harga Sewa"
                label="Harga Sewa"
                data={priceData}
              />
              <SelectBox
                onFocus={() => {
                  setBackDrop(true);
                }}
                onChange={handleChange}
                name="status"
                title="Masukan Status Mobil"
                label="Status"
                data={statusData}
              />
              <div className="d-flex align-items-end">
                {flegSearch ? <button onClick={handleHasilTextAdd} type="submit" className="btn btn-success w-100">
                  Cari Mobil
                </button> : <button onClick={handleButtonEdit} className="btn btn-outline-primary w-100">Edit</button> }
              </div>
            </Form>
          </div>
        </div>
      </div>
        <div className="contains-box contains-car">
          {loader !== "resolve" && <div className="contains-box contains-car text-center">
            <div className="spinner-border text-dark mt-4" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          { loader === "resolve" && <div className="row d-flex flex-wrap">
            {
              data.map((item, index) => {
                return (
                  
                  <div key={index} className="col-4">
                    <div className="card card-size align-items-center">
                      <div className="card-image-car">
                        <img className="img-max-contain" src={item.image} alt="" />
                      </div>
                      <div className="card-content p-4">
                        <p className="card-content-judul">{item.name}</p>
                        <p className="card-content-price">{formatNumber(item.price)} / hari</p>
                        <p className="card-content-keterangan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button onClick={() => navigate(`/cari-mobil/${item.id}`)} type="submit" className="btn btn-success w-100">Pilih Mobil</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>}
        </div>
    </div>
  );
};

export default SearchCar;
