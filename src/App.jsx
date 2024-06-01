import { useState } from "react";
import EventComponent from "./EventComponent";
import FormComponent from "./FormComponent";

function App() {
  const [eventList, setEventList] = useState([]); // [{id,name,date}]
  return (
    <section className="app">
      <h1>Event CountDowner</h1>
      <FormComponent eventList={eventList} setEventList={setEventList} />
      <EventComponent eventList={eventList} setEventList={setEventList} />
    </section>
  );
}

export default App;
