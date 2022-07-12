import React from "react";
import { getFeaturedEvents } from "../helpers/api-util";
import EventsList from "../components/events/EventsList";
const HomePage = (props) => {
  return (
    <>
      <EventsList items={props.events} />
    </>
  );
};
export async function getServerSideProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
export default HomePage;
