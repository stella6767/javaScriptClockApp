const weather = document.querySelector('.js-weather');

const API_KEY = 'Your API Code Here'; //가입하기 귀찮다 그냥 넘어가자
const COORDS = 'coords';

// function getWeather(latitude, longitude) { 
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       const temperature = json.main.temp;
//       const place = json.name;
//       weather.innerText = `🌡${temperature.toFixed(1)}℃  🇰🇷${place}`;
//     });
// }

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj)); //성공했으면 저장.

  console.log("coordsObj: "+coordsObj);
  
}


function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };

  saveCoords(coordsObj);

  //getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('cant access geo location'); //에러시
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); //내 현재 위치를 가져온다.
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords == null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    //getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}



init();