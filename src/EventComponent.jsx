import EventItem from "./EventItem";

function EventComponent({ eventList, setEventList }) {
  const removeEvent = (id) => {
    const filtered = eventList.filter((event) => event.id !== id);
    console.log(filtered);
    setEventList(filtered);
  };
  return (
    <section>
      {eventList.map((event, index) => (
        <EventItem key={index} event={event} removeEvent={removeEvent} />
      ))}
    </section>
  );
}

export default EventComponent;
