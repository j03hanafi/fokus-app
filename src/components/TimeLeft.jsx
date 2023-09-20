import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  timerLabel,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div>
      {formattedTimeLeft}
      <p id="timer-label">{timerLabel}</p>
      <button onClick={handleStartStopClick}>{startStopButtonLabel}</button>
    </div>
  );
};

export default TimeLeft;
