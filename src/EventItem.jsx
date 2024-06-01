import { useEffect, useState } from "react";

function EventItem({ event, removeEvent }) {
  const { id, name, date } = event;
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime(); // get the current time starting from Jan 1, 1970 into milliseconds
      const eventTime = new Date(date).getTime(); // get the time which is passed
      const distance = eventTime - now; // get the distance

      if (distance < 0) setTimeLeft(`${name} has begun`);
      else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(
          `${name} is going to begun in ${days}d ${hours}h ${minutes}m ${seconds}s`
        );
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div>
      <h1>{name}</h1>
      <p>{timeLeft}</p>
      <button onClick={() => removeEvent(id)}>Remove Event</button>
    </div>
  );
}

export default EventItem;
