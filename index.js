let div = document.getElementById('box');
let input = document.getElementById('userValue');

const getUserVal = async () => {
    let city = input.value;
    let apiKey = '474a9478cf9fb4662ebdb687853d8d85';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

     try {
         let response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        let weatherData = await response.json();
         displayWeatherData(weatherData);
     } catch (err) {
         console.log(err);
         displayError(err.message);
     }
}

const displayWeatherData = (data) => {
    let temperature = Math.round(data.main.temp - 273.15); 
    let weatherDescription = data.weather[0].description;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;
    let city = data.name;
    let country = data.sys.country;

    div.innerHTML = `
    <div class=card>
                <h5>${city}, ${country}</h5>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            </div>
        </div>
        </div>`;
}

const displayError = (message) => {
    div.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${message}
        </div>`;
}
