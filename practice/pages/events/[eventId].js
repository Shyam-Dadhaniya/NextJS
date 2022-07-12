import React from "react";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/events/ErrorAlert";
const EventDetailPage = (props) => {
  const event = props.selectedEvent;
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  console.log(event);
  if (!event) {
    <ErrorAlert>
      return <p>No Event Found</p>;
    </ErrorAlert>;
  }
  return (
    <div>
      <h1>Event Detail</h1>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    // revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: paths,
    fallback: true,
    // revalidate: 1800
  };
}

export default EventDetailPage;
