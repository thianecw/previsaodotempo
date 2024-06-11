let key = "298f75a41ca50217eb1e48b36f05b03d"

function showInfo(data) {
    console.log(data)

    document.querySelector(".local").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C"
    document.querySelector(".temp-max").innerHTML = "Max: " + Math.floor(data.main.temp_max) + " °C"
    document.querySelector(".temp-min").innerHTML = "Min: " + Math.floor(data.main.temp_min) + " °C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade do ar: " + data.main.humidity + "%"
    document.querySelector(".icon").src = "http://openweathermap.org./img/wn/" + data.weather[0].icon + ".png"
}

async function searchCity(city) {
    let response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        key +
        '&lang=pt_br' +
        '&units=metric',
    );
  
    if (!response.ok) {
      document.querySelector('.local').innerHTML = 'Cidade não encontrada';
      return;
    }
  
    let data = await response.json();
    showInfo(data);
  }


function searchBtn() {
    let city = document.querySelector(".input-city").value

    if (city === "") {
        return
    }

    searchCity(city)
}