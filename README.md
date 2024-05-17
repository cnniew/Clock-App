# Clock App

This is [my solution](https://cnniew.github.io/Clock-App/) to the [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM)

## The challenge

The challenge was to build out this clock application and get it looking as close to the design as possible using the following APIs to retrieve the necessary data:

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP address. This API will also be used for additional data, like the day of the year shown in the expanded state.
- [IP Geolocation API](https://freeipapi.com/api/json) to set the city and country underneath the time
- [Programming Quotes API](https://api.quotable.io/quotes/random) to generate random programming quotes.

## Features

- Displays the current time and location information based on their IP address using external APIs
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote
- View the optimal layout for the site depending on their device's screen size (mobile, tablet, and desktop)
- See hover states for all interactive elements on the page

## Expected Behaviour

- Change the greeting depending on the time of day. It should say:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
- Change the greeting icon and background image depending on the time of day. They should show:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
- Generate a new random programming quote whenever the refresh icon is clicked

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- JavaScript
