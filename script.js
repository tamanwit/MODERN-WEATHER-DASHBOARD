var cursor = document.querySelector(".outer-cursor");
var cursorinner = document.querySelector(".inner-cursor");
var a = document.querySelectorAll("a");

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#a6ccfaff",
  "#69a4fdff",
  "#51c8fcff",
  "#61baf5ff",
  "#5eb7efff",
  "#42b8f8ff",
  "#38aef7ff",
  "#3aabf1ff",
  "#589dd5ff",
  "#2a91e6ff",
  "#4195c5ff",
  "#3b86c0ff",
  "#2c73b2ff",
  "#2679acff",
  "#15529cff",
  "#0f4e95ff",
  "#003783ff",
  "#002b7cff",
  "#000368ff",
  "#001e60ff",
  "#00105fff",
  "#03005eff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles); //asking browser to call next frame to run the animation smooth
}

animateCircles(); //only for first call

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    circles[0].classList.add("hover");
    circles[1].classList.add("hover");
    circles[2].classList.add("hover");
    circles[3].classList.add("hover");
    circles[4].classList.add("hover");
    circles[5].classList.add("hover");
    circles[6].classList.add("hover");
    circles[7].classList.add("hover");
    circles[8].classList.add("hover");
    circles[9].classList.add("hover");
    circles[10].classList.add("hover");
    circles[11].classList.add("hover");
    circles[12].classList.add("hover");
    circles[13].classList.add("hover");
    circles[14].classList.add("hover");
    circles[15].classList.add("hover");
    circles[16].classList.add("hover");
    circles[17].classList.add("hover");
    circles[18].classList.add("hover");
    circles[19].classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    circles[0].classList.remove("hover");
    circles[1].classList.remove("hover");
    circles[2].classList.remove("hover");
    circles[3].classList.remove("hover");
    circles[4].classList.remove("hover");
    circles[5].classList.remove("hover");
    circles[6].classList.remove("hover");
    circles[7].classList.remove("hover");
    circles[8].classList.remove("hover");
    circles[9].classList.remove("hover");
    circles[10].classList.remove("hover");
    circles[11].classList.remove("hover");
    circles[12].classList.remove("hover");
    circles[13].classList.remove("hover");
    circles[14].classList.remove("hover");
    circles[15].classList.remove("hover");
    circles[16].classList.remove("hover");
    circles[17].classList.remove("hover");
    circles[18].classList.remove("hover");
    circles[19].classList.remove("hover");
  });
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

(function () {
  const KEY = 'theme-preference';
  const root = document.documentElement;
  const btn = document.getElementById('themeset');

function applyTheme(isDark) {
  if (isDark) root.classList.add('dark-theme');
  else root.classList.remove('dark-theme');
  if (btn) {
    btn.classList.toggle('fa-sun', !isDark);
    btn.classList.toggle('fa-moon', isDark);
  }
}

function getStored() {
  try {
    return localStorage.getItem(KEY);
  } catch (e) {
    return null;
  }
}

function store(pref) {
  try {
    localStorage.setItem(KEY, pref);
  } catch (e) {}
}

const stored = getStored();
if (stored === 'dark') applyTheme(true);
else if (stored === 'light') applyTheme(false);
else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);
}

if (btn) {
  btn.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark-theme');
    applyTheme(isDark);
    store(isDark ? 'dark' : 'light');
  });
}
function minimumDelay(promise, ms = 2000) {
    return Promise.all([
        promise,
        new Promise(resolve => setTimeout(resolve, ms))
    ]).then(results => results[0]);
}

const apiKey = '73cb12b98ada702912a59d372b5947df';

async function fetchWeatherByLocation(location) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data. Please check the location.');
    }
    return await response.json();
  } catch (error) {
      console.error('Fetch Error:', error.message);
      alert(error.message);
      return null;
    }
}
  
async function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data for your location.');
    }
    return await response.json();
    } catch (error) {
      console.error('Fetch by Coords Error:', error.message);
      alert(error.message);
      return null;
    }
}
  
function getActivitySuggestion(weather) {
  const temp = weather.main.temp;
  const condition = weather.weather[0].main.toLowerCase();
  if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('storm')) {
    return "It's a rainy day. Perfect for a movie marathon or a good book!";
  }
  if (condition.includes('snow')) {
    return "Snow is falling! Time to Go For a Run ";
  }
  if (temp > 28) {
    return "It's hot outside! A great day for swimming or chilling ";
  }
  if (temp > 18 && (condition.includes('clear') || condition.includes('clouds'))) {
    return "Perfect weather for a hike or a picnic";
  }
  if (temp < 10) {
    return "Chill in the Sunlight and refresh mind";
  }
  return "Enjoy your day! The weather is moderate and pleasant.";
}

function displayWeather(data) {
    const weatherInfo = document.querySelector('#weather-info');
    weatherInfo.innerHTML = ''; //clearing purana content

    const locationName = document.createElement('h2');
    locationName.className = 'weather-location';
    locationName.textContent = `Current Weather in ${data.city.name}`;
    weatherInfo.appendChild(locationName);

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'weather-cards-container';

    const current = data.list[0];
    const temp = current.main.temp.toFixed(1) + "℃";
    const condition = current.weather[0].description;
    const precipitation = current.pop ? (current.pop * 100).toFixed(0) + "%" : "0%";
    const wind = current.wind.speed + " m/s";
    const weatherDetails = [
        { label: "🌡️ Temperature", value: temp },
        { label: "⛅ Condition", value: condition },
        { label: "💧 Precipitation", value: precipitation },
        { label: "🌬️ Wind", value: wind }
    ];
    weatherDetails.forEach(item => {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `${item.label}<br><br>${item.value}`;
        cardsContainer.appendChild(card);
    });

    const suggestionText = getActivitySuggestion(current);
    const suggestionCard = document.createElement('div');
    suggestionCard.className = 'weather-card suggestion-card';
    suggestionCard.innerHTML = `Activity Tip... ${suggestionText}`;
    cardsContainer.appendChild(suggestionCard);
    weatherInfo.appendChild(cardsContainer);

    // --- Next 5-hour forecast ---
    const hourlyForecastContainer = document.createElement('div');
    hourlyForecastContainer.className = 'hourly-forecast-container';

    const hourlyHeading = document.createElement('h3');
    hourlyHeading.className = 'hourly-heading';
    hourlyHeading.textContent = 'Next 5 Forecasts (3-hour interval)';
    hourlyForecastContainer.appendChild(hourlyHeading);

    const hourlyCardsContainer = document.createElement('div');
    hourlyCardsContainer.className = 'hourly-cards-container';

    // OpenWeatherMap provides forecasts in 3-hour intervals
    const next5Hours = data.list.slice(0, 5);

    next5Hours.forEach((hourData, index) => {
        const hourCard = document.createElement('div');
        hourCard.className = 'weather-card hourly-card';
        const date = new Date(hourData.dt * 1000);

        // Format the time
        const timeString = date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });

        // Optional: icon
        const icon = hourData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const temp = hourData.main.temp.toFixed(1) + "℃";
        const condition = hourData.weather[0].description;
        const precipitation = hourData.pop ? (hourData.pop * 100).toFixed(0) + "%" : "0%";
        const windSpeed = hourData.wind.speed + " m/s";

        hourCard.innerHTML = `
            <div class="hourly-time">${timeString}</div>
            <img class="hourly-icon" src="${iconUrl}" alt="${condition}" />
            <div class="hourly-temp">${temp}</div>
            <div class="hourly-condition">${condition}</div>
            <div class="hourly-details">
                <small>💧 ${precipitation}</small>
                <small>🌬️ ${windSpeed}</small>
            </div>
        `;
        hourlyCardsContainer.appendChild(hourCard);
    });

    hourlyForecastContainer.appendChild(hourlyCardsContainer);
    weatherInfo.appendChild(hourlyForecastContainer);
}


//when pressing the get weather button
const getWeatherBtn = document.querySelector('#getWeatherBtn');
getWeatherBtn.addEventListener('click', async () => {
  const locationInput = document.querySelector('#location');
  const location = locationInput.value.trim();
  if (!location) {
    alert('Please enter a location.');
    return;
  }
  showLoader();
  const weatherData = await minimumDelay(fetchWeatherByLocation(location), 2000);
  hideLoader();
  if (weatherData) {
    displayWeather(weatherData);
  }
});
//  travel planner segment
const travelForm = document.querySelector('#travel-form');
travelForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const destinationInput = document.querySelector('#destination');
  const dateInput = document.querySelector('#travel-date');
  const destination = destinationInput.value.trim();
  const travelDate = dateInput.value;

  if (!destination || !travelDate) {
    alert('Please enter a destination and a travel date.');
      return;
  }
    
  const today = new Date();
  const selectedDate = new Date(travelDate);
  const fiveDaysFromNow = new Date();
  fiveDaysFromNow.setDate(today.getDate() + 5);

  if (selectedDate > fiveDaysFromNow) {
    alert('Forecast is only available for the next 5 days. Please select a closer date.');
        return;
  }

    const weatherData = await fetchWeatherByLocation(destination);
    if (weatherData) {
      displayTravelWeather(weatherData, travelDate);
    }
  });
  
  function displayTravelWeather(data, travelDate) {
      const resultsContainer = document.querySelector('#travel-weather-results');
      resultsContainer.innerHTML = '';

      const forecast = data.list.find(item => item.dt_txt.includes(travelDate));

      const heading = document.createElement('h3');
      heading.textContent = `Weather Forecast for ${data.city.name} on ${travelDate}`;
      resultsContainer.appendChild(heading);

      if (forecast) {
          const forecastCard = document.createElement('div');
          forecastCard.className = 'weather-card';
          const temp = forecast.main.temp.toFixed(1) + "℃";
          const condition = forecast.weather[0].description;
          forecastCard.innerHTML = `<span>🌡️ Temp: ${temp}</span><p>Condition: ${condition}</p>`;
          resultsContainer.appendChild(forecastCard);
      } else {
          resultsContainer.innerHTML += '<p>No forecast data available for the selected date.</p>';
      }

      // Placeholder for historical data
      const historicalCard = document.createElement('div');
      historicalCard.className = 'weather-card';
      historicalCard.innerHTML = `<span>Historical Average</span><p>Feature coming soon!</p>`;
      resultsContainer.appendChild(historicalCard);
  }

// loading users live location
  document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
      showLoader();
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await fetchWeatherByCoords(latitude, longitude);
        hideLoader();
        if (weatherData) {
          displayWeather(weatherData);
        }
      }, (error) => {
        hideLoader();
        console.warn('Could not get location. Please search manually.', error);
      });
    }
  });
})();

function showLoader() {
    const loader = document.getElementById('weather-loader');
    if (loader) loader.style.display = 'flex';
    const info = document.getElementById('weather-info');
    if (info) info.style.display = 'none';
}

function hideLoader() {
    const loader = document.getElementById('weather-loader');
    if (loader) loader.style.display = 'none';
    const info = document.getElementById('weather-info');
    if (info) info.style.display = '';
}
