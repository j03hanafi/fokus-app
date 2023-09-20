import React, { useEffect, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({ sesionLength, breakLength }) => {
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(sesionLength);
  const [intervalID, setIntervalID] = useState(null);

  useEffect(() => {
    if (currentSessionType === "Session") {
      setTimeLeft(sesionLength);
    } else if (currentSessionType === "Break") {
      setTimeLeft(breakLength);
    }
  }, [breakLength, currentSessionType, sesionLength]);

  const isStarted = intervalID !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalID);
      setIntervalID(null);
    } else {
      const newIntervalID = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          }

          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            setTimeLeft(breakLength);
          } else if (currentSessionType === "Break") {
            setCurrentSessionType("Session");
            setTimeLeft(sesionLength);
          }
        });
      }, 100);
      setIntervalID(newIntervalID);
    }
  };

  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div>
      {formattedTimeLeft}
      <p id="timer-label">{currentSessionType}</p>
      <button onClick={handleStartStopClick}>
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default TimeLeft;
