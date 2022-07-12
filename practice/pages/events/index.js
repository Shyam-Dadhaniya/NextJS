import React from "react";
import { getAllEvents } from "../../helpers/api-util";
import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
const AllEventsPage = (props) => {
  const events  = props.events;
  const router = useRouter();
  function findEventHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventHandler} />
      <EventsList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
