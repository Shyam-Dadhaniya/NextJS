import React from "react";
import EventItem from "./EventItem";
import styles from "./EventsList.module.css";
const EventsList = (props) => {
  const { items } = props;
  
  return (
    <>
      <ul className={styles.list}>
        {items.map((event) => (
          <EventItem
            key={event.id}
            location={event.location}
            date={event.date}
            id={event.id}
            title={event.title}
            image={event.image}
          />
        ))}
      </ul>
    </>
  );
};

export default EventsList;
