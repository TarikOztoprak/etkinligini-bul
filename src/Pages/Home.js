import NavBar from "../Components/NavBar";
import Event from "../Components/Event";
import Filter from "../Components/Filter";
import Slider from "../Components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Assets/Styles/Home.css"
function Home() {
    const [events, setEvents] = useState();
    const [popular, setPopular] = useState();
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
        <Filter/>
        <div className="event-list">
          {events ? (
            events.map((item) => (
              <Event
                id = {item.id}
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
            <div>Yükleniyor..</div>
          )}
        </div>
       
        <div className="slider-container">
          <h1 style={{textAlign: "center"}}>Popüler Etkinlikler</h1>
          <Slider urls={popular}/>
        </div>
      </div>
    );
}

export default Home
