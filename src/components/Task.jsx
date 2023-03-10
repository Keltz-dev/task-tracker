const Task = ({ task, deleteTask, toggleReminder }) => {
  const { id, text, day, reminder } = task;

  return (
    <div
      className={`task ${reminder && 'reminder'}`}
      onDoubleClick={() => toggleReminder(id)}>
      <h3 key={id}>
        {text}
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => deleteTask(id)}>❌
        </div>
      </h3>
      <p>{day}</p>
      {reminder && <p>🔔</p>}
    </div>
  );
}

export default Task
