import { useState } from "react";
import data from "./data";
import BirthdayList from "./BirthdayList";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
  <section className="container">
    <h2>Birthday Reminder - Starter</h2>
    <h3>{people.length} people have their birthday today</h3>
    <BirthdayList list={people}/>
    <button className="btn btn-block" onClick={() => setPeople([])}>Clear List</button>
  </section>
  )
  
};
export default App;
