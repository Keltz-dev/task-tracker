import { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form>
      <div className="form-control">
        {/* <label htmlFor='task'>Task</label> */}
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </div>
      <div className="form-control">
        {/* <label htmlFor='day&time'>Day & Time</label> */}
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.currentTarget.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder?</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => console.log(e.currentTarget)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
}

export default AddTask
