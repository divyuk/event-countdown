import { useState } from "react";

function FormComponent({ eventList, setEventList }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEventList([...eventList, { id: Date.now(), name, date }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={date}
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </section>
      <section>
        <button type="submit">Submit</button>
      </section>
    </form>
  );
}

export default FormComponent;
