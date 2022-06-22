import React from "react";
import "../Assets/Styles/Filter.css";
function Search(setIsSearching) {
  setIsSearching(true);
}
function Clean(setIsSearching) {
  setIsSearching(false);
}
function Filter(props) {
  return (
    <div className="filter">
      <input className="filter-item" type="date" onChange={e => console.log(e.target.value)}></input>

      <select onChange={(e) => {props.setCity(e.target.value) ; props.setSearchCity(true)}} className="filter-item">
        <option selected disabled>Şehir</option>
        <option>İstanbul</option>
        <option>İzmir</option>
        <option>Ankara</option>
      </select>

      <select onChange={(e) => {props.setCategory(e.target.value); props.setSearchCategory(true)}} className="filter-item">
        <option selected disabled>Kategori</option>
        <option value="Konser">Konser</option>
        <option value="Tiyatro">Tiyatro</option>
        <option value="Sanat">Sanat</option>
      </select>
      <input
        className="filter-item"
        placeholder="Etkinlik/Sanatçı Arayın"
        onChange={(e) => {props.setSearch(e.target.value)}}
      ></input>
      <button onClick={() => Search(props.setIsSearching)} className="filter-item">Ara</button>

      <button onClick={() => Clean(props.setIsSearching)} className="filter-item">Temizle</button>
    </div>
  );
}

export default Filter;
