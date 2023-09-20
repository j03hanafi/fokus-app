import React from "react";
import moment from "moment";
import {
  BreakSession,
  BreakSessionButton,
  BreakSessionButtonContainer,
  BreakSessionLabel,
  BreakSessionLength,
} from "@/ui/BreakSession";

const Break: React.FC<Props> = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();

  return (
    <BreakSession>
      <BreakSessionLabel id="break-label">Break</BreakSessionLabel>
      <BreakSessionLength id="break-length">
        {breakLengthInMinutes}
      </BreakSessionLength>
      <BreakSessionButtonContainer>
        <BreakSessionButton
          onClick={decrementBreakLengthByOneMinute}
          id="break-decrement"
        >
          -
        </BreakSessionButton>
        <BreakSessionButton
          onClick={incrementBreakLengthByOneMinute}
          id="break-increment"
        >
          +
        </BreakSessionButton>
      </BreakSessionButtonContainer>
    </BreakSession>
  );
};

type Props = {
  breakLength: number;
  decrementBreakLengthByOneMinute: () => void;
  incrementBreakLengthByOneMinute: () => void;
};

export default Break;
