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

  return (
    <div className="App container">
      <Header />
      {tasks ? (
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
      )
    </div>
  );
}

export default App;
