import React, { useState, useRef, useEffect } from 'react';


type TimerState = {
  seconds: number;
  isRunning: boolean;
};

const Timer: React.FC = () => {
  
  const [timer, setTimer] = useState<TimerState>({ seconds: 0, isRunning: false });

  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  
  const startTimer = () => {
    if (!timer.isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer(prev => ({ ...prev, seconds: prev.seconds + 1 }));
      }, 1000);
      setTimer(prev => ({ ...prev, isRunning: true }));
    }
  };

 
  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer(prev => ({ ...prev, isRunning: false }));
  };

  
  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer({ seconds: 0, isRunning: false });
  };

  
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Simple Timer</h1>
      <h2>{timer.seconds} seconds</h2>
      <button onClick={startTimer} disabled={timer.isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!timer.isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;