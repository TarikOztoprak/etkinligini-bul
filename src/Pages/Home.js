import NavBar from "../Components/NavBar";
import Event from "../Components/Event";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Assets/Styles/Home.css"

function Home() {
    const [events, setEvents] = useState();

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
    }, []);
  
    return (
      <div>
        <NavBar></NavBar>
  
        <div className="Event-List">
          {events ? (
            events.map((item) => (
              <Event
                id = {item.id}
                key={item.id}
                url={item.url}
                name={item.name}
                category={item.category}
                building={item.building}
                city={item.city}
                startdate={item.startdate}
                enddate={item.enddate}
              ></Event>
            ))
          ) : (
            <div>Yükleniyor..</div>
          )}
        </div>
      </div>
    );
}

export default Home
