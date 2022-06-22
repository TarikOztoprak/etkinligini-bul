import NavBar from "../Components/NavBar";
import Event from "../Components/Event";
import Filter from "../Components/Filter";
import Slider from "../Components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Assets/Styles/Home.css";

function DateFilter(start, end, date) {
  console.log(start);
  console.log(end);
  console.log(date);
  return date >= start && date <= end;
}

function Home() {
  const [events, setEvents] = useState();
  const [popular, setPopular] = useState();
  const [category, setCategory] = useState();
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");
  const [date, setDate] = useState();

  const [searchDate, setSearchDate] = useState();
  const [searchCategory, setSearchCategory] = useState(false);
  const [searchCity, setSearchCity] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/events/")
      .then(function (response) {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/popular/")
      .then(function (response) {
        setPopular(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Filter
        setIsSearching={setIsSearching}
        setCategory={setCategory}
        setCity={setCity}
        setSearchCategory={setSearchCategory}
        setSearchCity={setSearchCity}
        setSearch={setSearch}
        setDate={setDate}
        setSearchDate={setSearchDate}
      />
      <div className="event-list">
        {events ? (
          !isSearching ? (
            events.map((item) => (
              <Event
                id={item.id}
                key={item.id}
                url={item.url}
                name={item.name}
                category={item.category}
                place={item.place}
                city={item.city}
                startdate={item.startdate}
                enddate={item.enddate}
                address={item.address}
              ></Event>
            ))
          ) : (
            events
              .filter((item) => {
                return (
                  (!searchCategory || category === item.category) &&
                  (!searchCity || city === item.city) &&
                  (item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.people.toLowerCase().includes(search.toLowerCase())) &&
                  (!searchDate || DateFilter(item.startdate, item.enddate, date))
                );
              })
              .map((item) => (
                <Event
                  id={item.id}
                  key={item.id}
                  url={item.url}
                  name={item.name}
                  category={item.category}
                  place={item.place}
                  city={item.city}
                  startdate={item.startdate}
                  enddate={item.enddate}
                  address={item.address}
                ></Event>
              ))
          )
        ) : (
          <div>Yükleniyor..</div>
        )}
      </div>

      <div className="slider-container">
        <h1 style={{ textAlign: "center" }}>Popüler Etkinlikler</h1>
        <Slider urls={popular} />
      </div>
    </div>
  );
}

export default Home;
