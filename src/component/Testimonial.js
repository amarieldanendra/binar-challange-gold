import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import Photo from "../assets/images/img_photo.png";
import Photo2 from "../assets/images/img_photo2.png";
import Stars from "../assets/images/Star.png";

// import "swiper/react/";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import 'swiper/swiper-bundle.css';

const Testimonial = () => {
  
  return (
    <div>
      <section className="py-5" id="testimoni">
        <div className="text-center py-3">
          <span className="p-text-24">Testimonial</span>
          <p className="p-text">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <div className="container-testimonial overflow-hidden" id="Testimonial">
          <Swiper 
          style={{ "--swiper-navigation-size": "10px" }}
          modules={[Pagination, Navigation]}
          className="MySwiper"
          navigation={true}
          slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true} >
            <SwiperSlide className=" d-flex justify-content-center align-items-center">
            <div className="col-lg d-flex justify-content-center"  style={{ maxWidth: "619px", minHeight: "270px" }}>
                <div className="card border border-0  bg-testimonial  d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-lg d-flex justify-content-center align-items-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start  my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer text-start">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className=" d-flex justify-content-center align-items-center">
            <div className="col-lg d-flex justify-content-center"  style={{ maxWidth: "619px", minHeight: "270px" }}>
                <div className="card border border-0  bg-testimonial  d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-lg d-flex justify-content-center align-items-center">
                            <img src={Photo2} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start  my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer text-start">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className=" d-flex justify-content-center align-items-center">
            <div className="col-lg d-flex justify-content-center"  style={{ maxWidth: "619px", minHeight: "270px" }}>
                <div className="card border border-0  bg-testimonial  d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-lg d-flex justify-content-center align-items-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start  my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer text-start">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className=" d-flex justify-content-center align-items-center">
            <div className="col-lg d-flex justify-content-center"  style={{ maxWidth: "619px", minHeight: "270px" }}>
                <div className="card border border-0  bg-testimonial  d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-lg d-flex justify-content-center align-items-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start  my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer text-start">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className=" d-flex justify-content-center align-items-center">
            <div className="col-lg d-flex justify-content-center"  style={{ maxWidth: "619px", minHeight: "270px" }}>
                <div className="card border border-0  bg-testimonial  d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-lg d-flex justify-content-center align-items-center">
                            <img src={Photo2} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start  my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer text-start">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className=" d-flex justify-content-center align-items-center">
            <div className="col-lg d-flex justify-content-center"  style={{ maxWidth: "619px", minHeight: "270px" }}>
                <div className="card border border-0  bg-testimonial  d-flex justify-content-center align-items-center">
                    <div className="row g-0">
                        <div className="col-lg d-flex justify-content-center align-items-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start  my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer text-start">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
          </Swiper>   
        </div>

        
      </section>
    </div>
  );
};

export default Testimonial;
