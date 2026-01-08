import { useState, useEffect } from "react";

const Timer = ({ isRecording }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRecording]);

  return <div>Recording Time: {seconds}</div>;
};

export default Timer;
