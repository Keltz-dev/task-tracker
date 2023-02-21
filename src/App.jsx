import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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
    setTasks(tasks.map((task) => {
      if (task.id !== id) return task

      task.reminder = !task.reminder
      return task
    }))
  }

  return (
    <div className="App container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
      ) : (
        <h3>there are no tasks right now, go ahead and add one!</h3>
      )}
    </div>
  );
}

export default App;
