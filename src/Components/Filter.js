import React from "react";
import "../Assets/Styles/Filter.css";
function Filter() {
  return (
    <div className="filter">
      <input className="filter-item" type="date" onChange={e => console.log(e.target.value)}></input>

      <input className="filter-item" type="date"></input>

      <select className="filter-item">
        <option selected>Şehir</option>
        <option>İstanbul</option>
        <option>İzmir</option>
        <option>Ankara</option>
      </select>

      <select className="filter-item">
        <option selected>Tür</option>
        <option>Konser</option>
        <option>Tiyatro</option>
        <option>Sanat</option>
      </select>
      <input
        className="filter-item"
        placeholder="Etkinlik/Sanatçı Arayın"
      ></input>
      <button className="filter-item">Ara</button>
    </div>
  );
}

export default Filter;
