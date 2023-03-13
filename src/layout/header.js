import React from "react";
import logoBanner from "../assets/images/logo.png";
import carLogo from "../assets/images/img_car.png";
import Navbar from "../component/Navbar";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const params = useLocation ()
  return (
    <div className="overflow-hidden">
      <header className="container-fluid bg-color pt-2">
        <div className="row">
          <div className="col d-flex logo-position">
            <nav className="navbar">
              <div className="container-fluid">
                <img src={logoBanner} className="img-fluid" alt="pict-alt" />
              </div>
            </nav>
          </div>
          <div className="col">
            <Navbar />
          </div>
        </div>
      </header>
      <section className="bg-color">
      {!params.pathname.split('/').filter(i => i !== "")[1] && <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-2">
          <div className="col-sm pt-5 ps-5 pb-5">
            <p className="h-header p-3 m-4">
              Sewa & Rental Mobil Terbaik di kawasan (lokasimu)
            </p>
            <p className="p-text px-3 m-4">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div className="btn-header px-3 ms-4">
              {!params.pathname.split('').filter(i => i !== "")[1] && <button 
                type="button" 
                className="btn btn-success"
                onClick={() => navigate('/cari-mobil')}>
                Mulai Sewa Mobil
              </button>}
            </div>
          </div>
          <div className="col-sm d-flex align-items-end">
            <img src={carLogo} className="img-fluid img-width" alt="pick-alt" />
          </div>
        </div>}
      </section>
    </div>
  );
};

export default Header;
