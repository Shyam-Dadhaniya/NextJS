import React from "react";
import Link from "next/link";
import styles from "./EventItem.module.css";
import {
  BsFillCalendarEventFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import Button from "../ui/button";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const HumanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "<br />");
  const exploreLink = `/events/${id}`;
  return (
    <>
      <li className={styles.item}>
        <img src={"/" + image} alt={title} />
        <div className={styles.content}>
          <div className={styles.summary}>
            <h3>{title}</h3>
            <div className={styles.date}>
              <BsFillCalendarEventFill />
              <p>{HumanReadableDate}</p>
            </div>
            <div className={styles.address}>
              <GoLocation/>
              <p>{formattedAddress}</p>
            </div>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={styles.icon}>
                <BsFillArrowRightCircleFill />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};

export default EventItem;
