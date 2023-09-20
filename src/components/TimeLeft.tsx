import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

// @ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({
  timerLabel,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  handleResetButtonClick,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    // @ts-ignore
    .format("mm:ss", { trim: false });
  return (
    <div className="flex flex-col justify-evenly items-center h-56 w-56 md:w-96 md:h-96 p-8 bg-red-700 rounded-full  my-4 md:mx-0">
      <p id="timer-label" className="text-xl md:text-2xl font-medium">
        {timerLabel}
      </p>
      <p id="time-left" className="text-4xl md:text-8xl font-clock">
        {formattedTimeLeft}
      </p>
      <div className="grid grid-flow-col gap-2">
        <button
          id="start_stop"
          onClick={handleStartStopClick}
          className="mt-4 text-sm md:text-lg px-4 py-2 border border-gray-300 bg-gray-300 text-red-700 rounded-lg hover:border-white hover:bg-white transition duration-300 ease-in-out"
        >
          {startStopButtonLabel}
        </button>
        <button
          id="reset"
          onClick={handleResetButtonClick}
          className="mt-4 text-sm md:text-lg px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200 hover:text-red-700 transition duration-300 ease-in-out"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

type Props = {
  timerLabel: string;
  handleStartStopClick: () => void;
  startStopButtonLabel: string;
  timeLeft: number;
  handleResetButtonClick: () => void;
};

export default TimeLeft;
