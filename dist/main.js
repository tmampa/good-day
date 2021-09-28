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
/***/ (() => {

eval("const wrapper = document.querySelector(\".wrapper\"),\ninputPart = document.querySelector(\".input-part\"),\ninfoTxt = inputPart.querySelector(\".info-txt\"),\ninputField = inputPart.querySelector(\"input\"),\nlocationBtn = inputPart.querySelector(\"button\"),\nweatherPart = wrapper.querySelector(\".weather-part\"),\nwIcon = weatherPart.querySelector(\"img\"),\narrowBack = wrapper.querySelector(\"header i\")\napiKey = '5b1f0a980bd35cdef966b7da15d9b7f5';\n\nlet api;\n\ninputField.addEventListener(\"keyup\", e =>{\n    if(e.key == \"Enter\" && inputField.value != \"\"){\n        requestApi(inputField.value);\n    }\n});\n\nlocationBtn.addEventListener(\"click\", () =>{\n    if(navigator.geolocation){\n        navigator.geolocation.getCurrentPosition(onSuccess, onError);\n    }else{\n        alert(\"Your browser not support geolocation api\");\n    }\n});\n\nfunction requestApi(city){\n    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;\n    fetchData();\n}\n\nfunction onSuccess(position){\n    const {latitude, longitude} = position.coords;\n    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;\n    fetchData();\n}\n\nfunction onError(error){\n    infoTxt.innerText = error.message;\n    infoTxt.classList.add(\"error\");\n}\n\nfunction fetchData(){\n    infoTxt.innerText = \"Getting weather details...\";\n    infoTxt.classList.add(\"pending\");\n    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{\n        infoTxt.innerText = \"Something went wrong\";\n        infoTxt.classList.replace(\"pending\", \"error\");\n    });\n}\n\nfunction weatherDetails(info){\n    if(info.cod == \"404\"){\n        infoTxt.classList.replace(\"pending\", \"error\");\n        infoTxt.innerText = `${inputField.value} isn't a valid city name`;\n    }else{\n        const city = info.name;\n        const country = info.sys.country;\n        const {description, id} = info.weather[0];\n        const {temp, feels_like, humidity} = info.main;\n\n        if(id == 800){\n            wIcon.src = \"icons/clear.svg\";\n        }else if(id >= 200 && id <= 232){\n            wIcon.src = \"icons/storm.svg\";  \n        }else if(id >= 600 && id <= 622){\n            wIcon.src = \"icons/snow.svg\";\n        }else if(id >= 701 && id <= 781){\n            wIcon.src = \"icons/haze.svg\";\n        }else if(id >= 801 && id <= 804){\n            wIcon.src = \"icons/cloud.svg\";\n        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){\n            wIcon.src = \"icons/rain.svg\";\n        }\n        \n        weatherPart.querySelector(\".temp .numb\").innerText = Math.floor(temp);\n        weatherPart.querySelector(\".weather\").innerText = description;\n        weatherPart.querySelector(\".location span\").innerText = `${city}, ${country}`;\n        weatherPart.querySelector(\".temp .numb-2\").innerText = Math.floor(feels_like);\n        weatherPart.querySelector(\".humidity span\").innerText = `${humidity}%`;\n        infoTxt.classList.remove(\"pending\", \"error\");\n        infoTxt.innerText = \"\";\n        inputField.value = \"\";\n        wrapper.classList.add(\"active\");\n    }\n}\n\narrowBack.addEventListener(\"click\", ()=>{\n    wrapper.classList.remove(\"active\");\n});\n\n//# sourceURL=webpack://good-day/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;