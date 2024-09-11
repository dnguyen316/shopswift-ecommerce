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
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
      <div
        className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-primary-1 text-center font-semibold text-text-2"
        key={interval}
      >
        {timeLeft[interval as keyof typeof timeLeft]}

        <span className="text-[11px] font-normal capitalize">{interval}</span>
      </div>,
    );
  });

  return (
    <div className="flex gap-[24px] text-white">
      {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
    </div>
  );
};

export default Countdown;
