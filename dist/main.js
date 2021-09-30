/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const cityName = document.querySelector('.city');\nconst weatherCondition = document.querySelector('.weatherCondition');\nconst temp = document.querySelector('.temp');\nconst feelsLike = document.querySelector('.feelsLike');\nconst max = document.querySelector('.tempMax');\nconst humidity = document.querySelector('.humidty');\nconst deg = document.querySelector('.deg');\nconst input = document.querySelector('.searchBar');\nconst submit = document.querySelector('.add');\nconst slider = document.querySelector('.toggleF');\nconst img = document.querySelector('.weatherImage');\nconst body = document.querySelector('body');\n\nasync function getWeather(location) {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });\n  const data = await response.json();\n  const a = data.name;\n  const b = data.main.temp;\n  const c = data.main.feels_like;\n  const d = data.weather[0].description;\n  const e = data.main.humidity;\n  const f = data.main.temp_max;\n  buildPage(a, b, c, d, e, f);\n}\n\ngetWeather('Auckland');\n\nasync function toggleFarenheight() {\n  const location = cityName.textContent;\n  const unit = checkState();\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });\n  const data = await response.json();\n  const a = data.name;\n  const b = data.main.temp;\n  const c = data.main.feels_like;\n  const d = data.weather[0].description;\n  const e = data.main.humidity;\n  const f = data.main.temp_max;\n  buildPage(a, b, c, d, e, f);\n  changeDef();\n}\n\nconst buildPage = (place, t, feels, desc, humid, m) => {\n  desc = desc.charAt(0).toUpperCase() + desc.slice(1);\n  cityName.textContent = place;\n  weatherCondition.textContent = desc;\n  temp.textContent = Math.round(t);\n  feelsLike.textContent = `Feels like: ${Math.round(feels)}°`;\n  max.textContent = `Today's high: ${Math.round(m)}°`;\n  humidity.textContent = `Humidty: ${humid}%`;\n};\n\n// eslint-disable-next-line consistent-return\nconst checkState = () => {\n  if (slider.checked === true) {\n    this.x = 'imperial';\n    return this.x;\n  } if (slider.checked === false) {\n    this.x = 'metric';\n    return this.x;\n  }\n};\n\nconst changeDef = () => {\n  if (slider.checked === true) {\n    deg.textContent = '°F';\n  } else if (slider.checked === false) {\n    deg.textContent = '°C';\n  }\n};\n\nsubmit.addEventListener('click', () => {\n  getWeather(input.value);\n});\n\ninput.addEventListener('keyup', (e) => {\n  if (e.keyCode === 13) {\n    e.preventDefault();\n    submit.click();\n  }\n});\n\ninput.addEventListener('click', () => {\n  input.value = '';\n});\n\nslider.addEventListener('click', () => {\n  toggleFarenheight();\n});\n\n//# sourceURL=webpack://good-day/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;