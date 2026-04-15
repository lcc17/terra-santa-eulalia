"use client";
import { useState, useEffect } from "react";

const DAY_NAMES = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

/**
 * Silent schedule check hook
 * Terra Santa Eulalia: 10:00-14:00 & 15:00-19:00
 * Returns whether the current time is within open hours
 * and the next available opening time slot
 */
export function useSchedule() {
  const [schedule, setSchedule] = useState({
    isOpen: false,
    nextOpenTime: null,
  });

  useEffect(() => {
    const checkSchedule = () => {
      // Use Europe/Madrid timezone
      const now = new Date();
      const madridTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Europe/Madrid" })
      );

      const day = madridTime.getDay();
      const hours = madridTime.getHours();
      const minutes = madridTime.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Business hours
      const morningStart = 10 * 60; // 10:00
      const morningEnd = 14 * 60; // 14:00
      const afternoonStart = 15 * 60; // 15:00
      const afternoonEnd = 19 * 60; // 19:00

      // Check if weekend (Saturday=6, Sunday=0)
      const isWeekend = day === 0 || day === 6;

      if (isWeekend) {
        // Find next weekday
        let daysUntilMonday = day === 0 ? 1 : 2;
        const nextOpen = new Date(madridTime);
        nextOpen.setDate(nextOpen.getDate() + daysUntilMonday);
        nextOpen.setHours(10, 0, 0, 0);

        setSchedule({
          isOpen: false,
          nextOpenTime: `Lunes 10:00`,
        });
        return;
      }

      // Check if within morning session
      if (currentTime >= morningStart && currentTime < morningEnd) {
        setSchedule({ isOpen: true, nextOpenTime: null });
        return;
      }

      // Check if within afternoon session
      if (currentTime >= afternoonStart && currentTime < afternoonEnd) {
        setSchedule({ isOpen: true, nextOpenTime: null });
        return;
      }

      // Business is closed - determine next open time
      if (currentTime < morningStart) {
        // Before 10:00, opens today at 10:00
        const dayName = DAY_NAMES[day];
        setSchedule({
          isOpen: false,
          nextOpenTime: `${dayName} 10:00`,
        });
        return;
      }

      if (currentTime >= morningEnd && currentTime < afternoonStart) {
        // Between 14:00 and 15:00, opens at 15:00 today
        const dayName = DAY_NAMES[day];
        setSchedule({
          isOpen: false,
          nextOpenTime: `${dayName} 15:00`,
        });
        return;
      }

      if (currentTime >= afternoonEnd) {
        // After 19:00, next open is tomorrow at 10:00
        const tomorrow = new Date(madridTime);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDay = tomorrow.getDay();

        // If tomorrow is weekend, skip to Monday
        if (tomorrowDay === 6) {
          // Saturday -> Monday
          setSchedule({
            isOpen: false,
            nextOpenTime: "Lunes 10:00",
          });
        } else if (tomorrowDay === 0) {
          // Sunday -> Monday
          setSchedule({
            isOpen: false,
            nextOpenTime: "Lunes 10:00",
          });
        } else {
          const tomorrowDayName = DAY_NAMES[tomorrowDay];
          setSchedule({
            isOpen: false,
            nextOpenTime: `${tomorrowDayName} 10:00`,
          });
        }
        return;
      }
    };

    checkSchedule();
    // Check every minute to update automatically
    const interval = setInterval(checkSchedule, 60000);

    return () => clearInterval(interval);
  }, []);

  return schedule;
}