import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import CategoryBadge from "../Components/CategoryBadge";
import axios from "axios";
function Details() {
  const params = useParams();
  const [event, setEvent] = useState();

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
  }, [params.id]);
  return (
    <div>
      <NavBar />
      {event ? (
        <div>
          <img alt={event.name} className="Event-Img" src={event.url}></img>
          <CategoryBadge category={event.category} />
          <h3>{event.name}</h3>
          <p>
            {event.building}, {event.city}
          </p>
          <p>
            {event.startdate} - {event.enddate}
          </p>{" "}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
