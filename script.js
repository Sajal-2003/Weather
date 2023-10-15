let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let getWeather = () => {
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please Enter a city name</h3>`;
  } else {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value = "";
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="weather">${data.weather[0].description}</h4> 
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
            <div class="temp-container">
            <p>Temperature :</p>
            <p>${data.main.temp} &#176</p>
            </div>
            <div class="temp-container">
            <p>Humidity :</p>
            <p>${data.main.humidity}%</p>
            </div>
            <div class="temp-container">
            <p>Pressure :</p>
            <p>${(data.main.pressure / 1.333).toFixed(1)} mm Hg</p>
            </div>
            <div class="temp-container">
            <p>Wind Speed :</p>
            <p>${data.wind.speed} m/s</p>
            </div>
            </div>
            `;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not Found</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
