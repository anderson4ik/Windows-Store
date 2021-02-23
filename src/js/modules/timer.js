const timer = (id, deadline) => {

  const addZero = (num) => {
    if (num <= 9) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      //Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
      seconds = Math.floor((t / 1000) % 60), // return remain after dividing by 60s in one minutes
      minutes = Math.floor((t / 1000 / 60) % 60), // return remain of minutes after dividing by 60min in one hour
      hours = Math.floor((t / 1000 / 60 / 60) % 24), // return remain of hours after dividing by 24hours in one day
      days = Math.floor(t / 1000 / 60 / 60 / 24); // return days

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();  // to set clock on page during initialization

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

export default timer;
