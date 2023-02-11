import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask}/>
      ))}
    </>
  )
}

export default Tasks
