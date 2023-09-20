import React from "react";
import moment from "moment";

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();

  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button
        onClick={decrementSessionLengthByOneMinute}
        id="session-decrement"
      >
        -
      </button>
      <button
        onClick={incrementSessionLengthByOneMinute}
        id="session-increment"
      >
        +
      </button>
    </div>
  );
};

export default Session;
