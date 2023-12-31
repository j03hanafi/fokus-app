import React from "react";
import moment from "moment";
import {
  BreakSession,
  BreakSessionButton,
  BreakSessionButtonContainer,
  BreakSessionLabel,
  BreakSessionLength,
} from "@/ui/BreakSession";

const Session: React.FC<Props> = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment
    .duration(sessionLength, "s")
    .asMinutes();

  return (
    <BreakSession>
      <BreakSessionLabel id="session-label">Session</BreakSessionLabel>
      <BreakSessionLength id="session-length">
        {sessionLengthInMinutes}
      </BreakSessionLength>
      <BreakSessionButtonContainer>
        <BreakSessionButton
          onClick={decrementSessionLengthByOneMinute}
          id="session-decrement"
        >
          -
        </BreakSessionButton>
        <BreakSessionButton
          onClick={incrementSessionLengthByOneMinute}
          id="session-increment"
        >
          +
        </BreakSessionButton>
      </BreakSessionButtonContainer>
    </BreakSession>
  );
};

type Props = {
  sessionLength: number;
  decrementSessionLengthByOneMinute: () => void;
  incrementSessionLengthByOneMinute: () => void;
};

export default Session;
