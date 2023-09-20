import Head from "next/head";
import Break from "@/components/Break";
import Session from "@/components/Session";
import { useEffect, useRef, useState } from "react";
import TimeLeft from "@/components/TimeLeft";

export default function Home() {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      audioElement?.current?.play();
      if (currentSessionType === "Session") {
        setCurrentSessionType("Break");
        setTimeLeft(breakLength);
      } else if (currentSessionType === "Break") {
        setCurrentSessionType("Session");
        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, currentSessionType, sessionLength, timeLeft]);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(sessionLength + 60);
    }
  };

  const isStarted = intervalID !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      if (intervalID) {
        clearInterval(intervalID);
      }
      setIntervalID(null);
    } else {
      const newIntervalID = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 50);
      setIntervalID(newIntervalID);
    }
  };

  const resetButtonHandler = () => {
    if (intervalID) {
      clearInterval(intervalID);
    }
    setIntervalID(null);
    setCurrentSessionType("Session");
    setSessionLength(60 * 25);
    setBreakLength(300);
    setTimeLeft(60 * 25);
    audioElement?.current?.load();
  };

  return (
    <>
      <Head>
        <title>Fokus Clock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col h-screen items-center justify-center ">
        <div className="flex flex-col md:flex-row w-full justify-around items-center">
          <Session
            sessionLength={sessionLength}
            decrementSessionLengthByOneMinute={
              decrementSessionLengthByOneMinute
            }
            incrementSessionLengthByOneMinute={
              incrementSessionLengthByOneMinute
            }
          />
          <TimeLeft
            handleResetButtonClick={resetButtonHandler}
            timerLabel={currentSessionType}
            handleStartStopClick={handleStartStopClick}
            startStopButtonLabel={isStarted ? "Stop" : "Start"}
            timeLeft={timeLeft}
          />
          <Break
            breakLength={breakLength}
            decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
            incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
          />
        </div>
        <audio id="beep" ref={audioElement}>
          <source
            src="https://assets.mixkit.co/active_storage/sfx/995/995-preview.mp3"
            type="audio/mpeg"
          />
        </audio>
      </main>
    </>
  );
}