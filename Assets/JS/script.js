
// working code for weather app, just need to add for second choice 
document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const limit = 1;
    const apiKey = 'ae6228c596430403bdb4b85fa54b467a'; // My API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`; //imperial 
  

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = `
                    <h2 class="text-center">Weather in ${data.name}, ${data.sys.country}</h2>
                    <ul class="list-group">
                        <li class="list-group-item">Temperature: ${data.main.temp} °F</li> 
                        <li class="list-group-item">Weather: ${data.weather[0].description}</li>
                        <li class="list-group-item">Humidity: ${data.main.humidity}%</li>
                        <li class="list-group-item">Wind Speed: ${data.wind.speed} m/s</li>
                       
                    </ul>
                `;
                document.getElementById('result').innerHTML = weather;
            } else {
                document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Error: ${data.message}</div>`;
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Failed to fetch weather data. Please try again later.</div>`;
            console.error('Error:', error);
        });
});

// working code for weather app, above here