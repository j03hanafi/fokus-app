import React, { useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({ sesionLength }) => {
  const [timeLeft, setTimeLeft] = useState(sesionLength);

  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss");
  return <div>{formattedTimeLeft}</div>;
};

export default TimeLeft;
