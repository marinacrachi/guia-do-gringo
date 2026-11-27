import { useState } from "react";
import { calculateDiffInDays } from "../../utils/date";

const TRIP_DAY = new Date(2027, 2, 2);

export const Footer = () => {
  const [daysRemaining] = useState(() =>
    calculateDiffInDays(new Date(), TRIP_DAY),
  );

  return (
    <footer>
      {daysRemaining > 0 ? (
        <p>
          {daysRemaining} {daysRemaining > 1 ? "days" : "day"} to the trip!
        </p>
      ) : (
        <p>Enjoy the trip!</p>
      )}
    </footer>
  );
};
