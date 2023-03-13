import React from "react";

const SelectBox = ({ label = "", title = "", data = [], ...props }) => {
  return (
    <div className="form-group" style={{ /* width: 14rem; */ }}>
      <label className="text-detail form-label">{label}</label>
      <select
        {...props}
        className="text-detail form-control"
        placeholder="Masukan Kapasitas Mobil"
        id="inputGroupSelect01"
      >
        <option selected value={""} disabled>
          {title}
        </option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.value ? <div>{item.label}<i className="fa-regular fa-circle-check"></i></div> : <div>{item.label}</div>}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
