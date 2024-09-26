import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("en-us", {
    weekday: "long",
  });

  const formattedMonth = currentTime.toLocaleDateString("en-US", {
    month: "long",
  });

  const formattedYear = currentTime.getFullYear();

  return (
    <div>
      <p>{formattedTime}</p>
      <p>{formattedDate}</p>
      <p>
        {formattedMonth} {formattedYear}
      </p>
    </div>
  );
};

export default Clock;
