import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import SearchCar from "../pages/search-car";
import DetailCar from "../pages/search-car/detail";

const router = (props) => {
  return [
    { index: true, path: '/', element: <Home {...props} title="Home" />, },
    { index: true, path: '/cari-mobil', element: <SearchCar {...props} title="Cari Mobil" />, },
    { index: true, path: '/cari-mobil/:id', element: <DetailCar {...props} title="Detail Mobil" />, },
    { index: true, path: '*', element: <div>Halaman Not Found</div> },
  ];
};

const PublicRoutes = (props) => {
  const routes = useRoutes(router(props));
  return routes;
};

export default PublicRoutes;
