import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import CategoryBadge from "../Components/CategoryBadge";
import Event from "../Components/Event";
import axios from "axios";
import "../Assets/Styles/Details.css";
import Slider from "../Components/Slider";
function Details() {
  const params = useParams();
  const [event, setEvent] = useState();
  const [events, setEvents] = useState();

  let rand1 = Math.floor(Math.random() * 8);
  let rand2 = Math.floor(Math.random() * 8);
  let rand3 = Math.floor(Math.random() * 8);

  useEffect(() => {
    axios
      .get("http://localhost:3000/events/" + params.id)
      .then(function (response) {
        setEvent(response.data);
        console.log(response.data);
        console.log(params.id);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/events/")
      .then(function (response) {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.id]);
  return (
    <div>
      <NavBar />
      <div className="details-container">
        {event ? (
          <div className="details">
            <Slider urls={event.url} />
            <CategoryBadge category={event.category} />
            <h3>{event.name}</h3>
            <p className="content">{event.content}</p>
            <ul>
              🎫 Bilet Fiyatları
              {event.price.map((item, key) => (
                <li key={key}>
                  {" "}
                  {key + 1}. Kategori {item} TL
                </li>
              ))}
            </ul>
            <p>
              📅 {event.startdate} - {event.enddate}
            </p>{" "}
            <p>
              {event.place}, {event.city}
            </p>
            <p>📍 {event.address}</p>
            <iframe
              src={event.map}
              width="100%"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : (
          <p>Yükleniyor...</p>
        )}
        <div className="suggestions-container">
          <div className="suggestions">
            <h1>Önerilen Etkinlikler</h1>
            {events ? (
              events
                .filter((item) => {
                  return (
                    item.id == rand1 || item.id == rand2 || item.id == rand3
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
                  ></Event>
                ))
            ) : (
              <div>Yükleniyor..</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
