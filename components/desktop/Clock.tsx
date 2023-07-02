"use client";

import React, { useState, useEffect } from "react";

export default function Clock() {
  const [min, setMin] = useState("");
  const [hrs, setHrs] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      setMin(formattedMinutes.toString());
      setHrs(formattedHours.toString());
      // const formattedTime = `${formattedHours}:${formattedMinutes}`;
      // setTime(formattedTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!min || !hrs) return <div className="animate-pulse">--:--</div>;

  return (
    <div className="flex items-center">
      {hrs} <span className="animate-pulse">:</span> {min}
    </div>
  );
}
