import React from "react";
import moment from "moment";

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();

  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button onClick={decrementBreakLengthByOneMinute} id="break-decrement">
        -
      </button>
      <button onClick={incrementBreakLengthByOneMinute} id="break-increment">
        +
      </button>
    </div>
  );
};

export default Break;
