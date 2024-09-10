"use client";

import React, { useCallback, useEffect, useState } from "react";

interface CountdownProps {
  endTime: string;
}

const Countdown = ({ endTime }: CountdownProps) => {
  const calculateTimeLeft = useCallback(() => {
    // Ensure `endTime` is a Date object.
    const endTimeDate =
      typeof endTime === "string" ? new Date(endTime) : endTime;

    // Check if `endTimeDate` is valid
    if (isNaN(endTimeDate.getTime())) {
      console.error("Invalid end time provided");
      return <div>Invalid end time</div>;
    }

    const difference = endTimeDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [endTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, calculateTimeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
      </span>,
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
    </div>
  );
};

export default Countdown;
