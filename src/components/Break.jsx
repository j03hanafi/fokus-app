import React, {useState} from 'react';
import moment from "moment";

const Break = () => {
  const [breakLength, setBreakLength] = useState(300)

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength  = breakLength - 60;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  }

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60)
  }

  const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();

  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button onClick={decrementBreakLengthByOneMinute} id="break-decrement">-</button>
      <button onClick={incrementBreakLengthByOneMinute} id="break-increment">+</button>
    </div>
  );
};

export default Break;