const expanderBtn = document.querySelector(".expander__btn");
const quoteRefreshBtn = document.querySelector(".quote-refresh");

const toggleExpander = () => {
  const additionalInfo = document.querySelector(".additional-info-container");
  const main = document.querySelector(".main");
  const expanderText = document.querySelector(".expander__text");

  additionalInfo.classList.toggle("up");
  main.classList.toggle("up");
  if (additionalInfo.classList.contains("up")) {
    expanderText.textContent = "LESS";
  } else {
    expanderText.textContent = "MORE";
  }
};

const getFromAPIs = async (apiType) => {
  const apiEndpoints = {
    quote: "https://api.quotable.io/quotes/random",
    time: "https://worldtimeapi.org/api/ip",
    country: "https://freeipapi.com/api/json",
    additionalInfo: "https://worldtimeapi.org/api/ip",
  };

  try {
    const res = await fetch(apiEndpoints[apiType]);
    const data = await res.json();

    if (apiType === "quote") {
      return data[0];
    } else {
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};

const updateQuote = async () => {
  const data = await getFromAPIs("quote");
  const quote = document.querySelector(".quote__text");
  const author = document.querySelector(".quote__author");

  quote.textContent = data.content;
  author.textContent = data.author;
};

const updateCountry = async () => {
  const data = await getFromAPIs("country");
  const city = document.querySelector(".clock-location__city");
  const country = document.querySelector(".clock-location__country");

  city.textContent = data.cityName;
  country.textContent = data.countryCode;
};

const updateTime = async () => {
  const data = await getFromAPIs("time");
  const datetime = new Date(data.datetime);
  const hours = document.querySelector(".clock-time__hour");
  const mins = document.querySelector(".clock-time__mins");
  const abbreviation = document.querySelector(".clock-time__abbrev");
  const currentHour = datetime.getHours();
  const currentMin = datetime.getMinutes();

  hours.textContent = currentHour;
  mins.textContent = currentMin < 10 ? `0${currentMin}` : currentMin;
  abbreviation.textContent = data.abbreviation;

  updateGreeting(currentHour);
  updateBackgroundsGreetingIcon(currentHour);
};

const updateGreeting = (hour) => {
  const greetingText = document.querySelector(".clock-greeting__text");

  if (hour >= 5 && hour < 12) {
    greetingText.textContent = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greetingText.textContent = "Good afternoon";
  } else {
    greetingText.textContent = "Good evening";
  }
};

const updateBackgroundsGreetingIcon = (hour) => {
  const background = document.querySelector(".background").classList;
  const greetingIcon = document.querySelector(".clock-greeting__icon");
  const additionalInfoContainer = document.querySelector(
    ".additional-info-container"
  );

  if (hour >= 5 && hour < 18) {
    background.add("background--day");
    greetingIcon.src = "./assets/desktop/icon-sun.svg";
    additionalInfoContainer.style.backgroundColor = "white";
    additionalInfoContainer.style.color = "black";
  } else {
    background.add("background--night");
    greetingIcon.src = "./assets/desktop/icon-moon.svg";
    additionalInfoContainer.style.backgroundColor = "black";
    additionalInfoContainer.style.color = "white";
  }
};

const updateAdditionalInfo = async () => {
  const data = await getFromAPIs("additionalInfo");
  const timezone = document.querySelector(".additional-info__timezone");
  const dayOfYear = document.querySelector(".additional-info__day-of-year");
  const dayOfWeek = document.querySelector(".additional-info__day-of-week");
  const weekNumber = document.querySelector(".additional-info__week-number");

  timezone.textContent = data.timezone;
  dayOfYear.textContent = data.day_of_year;
  dayOfWeek.textContent = data.day_of_week;
  weekNumber.textContent = data.week_number;
};

updateAdditionalInfo();
updateTime();
updateCountry();
updateQuote();

expanderBtn.addEventListener("click", toggleExpander);
quoteRefreshBtn.addEventListener("click", updateQuote);
