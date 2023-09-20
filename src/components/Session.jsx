import React, {useState} from 'react';
import moment from "moment";

const Session = () => {
  const [sessionLength, setSessionLength] = useState(60 * 25)

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength  = sessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  }

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60)
  }

  const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();

  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button onClick={decrementSessionLengthByOneMinute} id="session-decrement">-</button>
      <button onClick={incrementSessionLengthByOneMinute} id="session-increment">+</button>
    </div>
  );
};

export default Session;