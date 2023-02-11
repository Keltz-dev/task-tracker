import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do the laundry",
      day: "friday the 13th",
      reminder: true,
    },
    {
      id: 2,
      text: "Do the dishes",
      day: "yesterday",
      reminder: true,
    },
    {
      id: 3,
      text: "Do my taxes",
      day: "31st of February",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id, "reminder");
  }

  return (
    <div className="App container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
      ) : (
        <h3>there are no tasks right now, go ahead and add one!</h3>
      )}
    </div>
  );
}

export default App;
