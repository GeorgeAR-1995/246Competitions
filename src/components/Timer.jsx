import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the target date and time for the countdown
  const targetDate = new Date("2025-02-15T23:59:59").getTime(); // Replace with your target date

  // State to store the remaining time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the remaining time
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // If the countdown is over, return all zeros
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-500 text-blue-900 py-4 text-center">
      <h3 className="text-2xl font-bold">Hurry! Time Left to Enter:</h3>
      <div className="flex justify-center gap-4 mt-2">
        <div>
          <span className="text-3xl font-bold">{timeRemaining.days}</span>
          <span className="block text-sm">Days</span>
        </div>
        <div>
          <span className="text-3xl font-bold">{timeRemaining.hours}</span>
          <span className="block text-sm">Hours</span>
        </div>
        <div>
          <span className="text-3xl font-bold">{timeRemaining.minutes}</span>
          <span className="block text-sm">Minutes</span>
        </div>
        <div>
          <span className="text-3xl font-bold">{timeRemaining.seconds}</span>
          <span className="block text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;