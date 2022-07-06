import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  function findEventHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventHandler} />
     <EventsList items={events}/>
    </div>
  );
};

export default AllEventsPage;
