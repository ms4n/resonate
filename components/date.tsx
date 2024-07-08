import React, { useState, useEffect } from "react";

const DateAndDay: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const updateFormattedDate = () => {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "short",
        day: "numeric",
      };

      setFormattedDate(today.toLocaleDateString("en-IN", options));
    };

    // Call the function on mount
    updateFormattedDate();

    // Update every minute (optional)
    const intervalId = setInterval(updateFormattedDate, 60000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateAndDay;
