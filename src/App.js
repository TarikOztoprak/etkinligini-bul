import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";
import Event from "./Components/Event";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Assets/Styles/App.css"
function App() {
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
      <Slider></Slider>
      <div className="Event-List">
        {events ? (
          events.map((item) => (
            <Event
              key={item.id}
              url={item.url}
              name={item.name}
              building={item.building}
              city={item.city}
              start-date={item.startdate}
              end-date={item.enddate}
            ></Event>
          ))
        ) : (
          <div>Yükleniyor..</div>
        )}
      </div>
    </div>
  );
}

export default App;
