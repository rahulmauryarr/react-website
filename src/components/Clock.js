import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';

export default function Clock() {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const [weekday, setWeekday] = useState('');
  const [ampm, setAmPm] = useState('');

  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const weekdayRef = useRef(null);
  const ampmRef = useRef(null);

  const dayNames = useMemo(() => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], []);

  const clock = useCallback(() => {
    const date = new Date();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const day = date.getDay();
    const fDay = dayNames[day];
    const isPM = hrs >= 12;
    const fhrs = (hrs === 0 ? 12 : (hrs > 12 ? hrs - 12 : hrs));

    setHour(fhrs.toString().padStart(2, '0'));
    setMinute(min.toString().padStart(2, '0'));
    setSecond(sec.toString().padStart(2, '0'));
    setWeekday(fDay);
    setAmPm(isPM ? 'PM' : 'AM');
  }, [dayNames]);

  useEffect(() => {
    const intervalId = setInterval(clock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [clock]);

  useEffect(() => {
    // Update DOM elements using refs
    hourRef.current.innerText = hour;
    minuteRef.current.innerText = minute;
    secondRef.current.innerText = second;
    weekdayRef.current.innerText = weekday;
    ampmRef.current.innerText = ampm;
  }, [hour, minute, second, weekday, ampm]);

  return (
    <div className="container">
      <div className="row">
        <div className="clock">
          <div className="bg">
            <h2 ref={hourRef}>Hour</h2>
          </div>
          <h2>:</h2>
          <div className="bg">
            <h2 ref={minuteRef}>Min</h2>
          </div>
          <h2>:</h2>
          <div className="bg">
            <h2 ref={secondRef}>Sec</h2>
          </div>
          <h2>:</h2>
          <div className="bg">
            <h2 ref={weekdayRef}>Day</h2>
          </div>
          <div className="bg">
            <h2 ref={ampmRef}>AM/PM</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
