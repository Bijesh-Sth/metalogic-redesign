import React, { useState, useEffect } from "react";

const OdometerComponent: React.FC = () => {
  const [kilometers, setKilometers] = useState(831);
  const [liters, setLiters] = useState(821);

  useEffect(() => {
    const interval = setInterval(() => {
      setKilometers((prev) => {
        const nextValue = Math.max(313, prev - Math.floor(Math.random() * 10)); // Randomly decrease by up to 10
        return nextValue;
      });
      setLiters((prev) => {
        const nextValue = Math.max(210, prev - Math.floor(Math.random() * 10)); // Randomly decrease by up to 10
        return nextValue;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between">
        <div className="text-7xl font-bold coffee_code_outline_text__r9p79">
          {kilometers}
        </div>
        <div className="text-7xl font-bold coffee_code_outline_text__r9p79">
          {liters}
        </div>
      </div>
      <div className="flex justify-between">
        <div>Kilometers of code written</div>
        <div>Liters of Coffee Drank</div>
      </div>
    </div>
  );
};

export default OdometerComponent;
