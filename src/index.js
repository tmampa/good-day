const cityName = document.querySelector('.city');
const weatherCondition = document.querySelector('.weatherCondition');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feelsLike');
const max = document.querySelector('.tempMax');
const humidity = document.querySelector('.humidty');
const deg = document.querySelector('.deg');
const input = document.querySelector('.searchBar');
const submit = document.querySelector('.add');
const slider = document.querySelector('.toggleF');
const img = document.querySelector('.weatherImage');
const body = document.querySelector('body');

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });
  const data = await response.json();
  const a = data.name;
  const b = data.main.temp;
  const c = data.main.feels_like;
  const d = data.weather[0].description;
  const e = data.main.humidity;
  const f = data.main.temp_max;
  buildPage(a, b, c, d, e, f);
}

getWeather('Auckland');

async function toggleFarenheight() {
  const location = cityName.textContent;
  const unit = checkState();
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });
  const data = await response.json();
  const a = data.name;
  const b = data.main.temp;
  const c = data.main.feels_like;
  const d = data.weather[0].description;
  const e = data.main.humidity;
  const f = data.main.temp_max;
  buildPage(a, b, c, d, e, f);
  changeDef();
}

const buildPage = (place, t, feels, desc, humid, m) => {
  desc = desc.charAt(0).toUpperCase() + desc.slice(1);
  cityName.textContent = place;
  weatherCondition.textContent = desc;
  temp.textContent = Math.round(t);
  feelsLike.textContent = `Feels like: ${Math.round(feels)}°`;
  max.textContent = `Today's high: ${Math.round(m)}°`;
  humidity.textContent = `Humidty: ${humid}%`;
};

// eslint-disable-next-line consistent-return
const checkState = () => {
  if (slider.checked === true) {
    this.x = 'imperial';
    return this.x;
  } if (slider.checked === false) {
    this.x = 'metric';
    return this.x;
  }
};

const changeDef = () => {
  if (slider.checked === true) {
    deg.textContent = '°F';
  } else if (slider.checked === false) {
    deg.textContent = '°C';
  }
};

submit.addEventListener('click', () => {
  getWeather(input.value);
});

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});

input.addEventListener('click', () => {
  input.value = '';
});

slider.addEventListener('click', () => {
  toggleFarenheight();
});