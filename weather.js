let weather;
let temp;
let weatherDiv = document.getElementById("Weather");
let weatherPara = document.getElementById("weatherPara");
let weatherBtn = document.getElementById("weatherBtn");
weatherBtn.onclick = checkWeather;

function checkWeather() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=d9a23dd87b2ada4d338147e50bcd0839&units=metric')
        .then(function (resp) {
            return resp.json(); // Convert data to json
        })
        .then(function (data) {
            console.log(data);
            weatherPara.textContent = " The weather outside is like " + data.weather[0].description;
            weatherPara.style.color = "Orange";
        })
};