//setting default background image before user enters data
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1479888230021-c24f136d849f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsaW5nJTIwbHVnZ2FnZXxlbnwwfHwwfHx8MA%3D%3D')";
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

// working code for weather app, just need to add for second choice 
//line 34 is for calling function to change background image
document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    //const country = document.getElementById('country').value;
    const country = 'USA';
    const limit = 1;
    const apiKey = 'ae6228c596430403bdb4b85fa54b467a'; // My API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`; //imperial 

    //gets weather data from openweather api
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
                updateBackgroundImage(data.weather[0].description); // to change background image

                // Export weather and save to local storage to use later
                window.weather = data.weather[0].description;
                window.temperature = data.main.temp;
                window.humidity = data.main.humidity;
                window.windSpeed = data.wind.speed;
                //console.log(`window weather `+ window.weather);
                localStorage.setItem('window.weather', JSON.stringify(window.weather));
                localStorage.setItem('window.temperature', JSON.stringify(window.temperature));
                localStorage.setItem('window.humidity', JSON.stringify(window.humidity));
                localStorage.setItem('window.windSpeed', JSON.stringify(window.windSpeed));

            } else {
                document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Error: ${data.message}</div>`;
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Failed to fetch weather data. Please try again later.</div>`;
            console.error('Error:', error);
        });
});

// Store the form data in local storage (for main selection)
document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    //var country = document.getElementById('country').value;
    //var unit = document.getElementById('unit').value;

    var weatherData = {
        city: city,
        state: state,
        // country: country,
        // unit: unit
    };

    localStorage.setItem('weatherData', JSON.stringify(weatherData));

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Form data stored in local storage.';
});
console.log(localStorage.getItem('weatherData'));
//bring up saved storage
window.addEventListener('DOMContentLoaded', function () {
    var weatherData = localStorage.getItem('weatherData');
    var windowWeather = localStorage.getItem('window.weather');
    var windowTemperature = localStorage.getItem('window.temperature');
    var windowHumidity = localStorage.getItem('window.humidity');
    var windowWindSpeed = localStorage.getItem('window.windSpeed');


    if (weatherData) {
        weatherData = JSON.parse(weatherData);
        var cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <div id="card-container" draggable="true" >
            <h5 class="card-title">Previously selected destination:</h5>
            <p class="card-text">City: ${weatherData.city.toUpperCase()}</p>
            <p class="card-text">State: ${weatherData.state.toUpperCase()}</p>
            <p class="card-text">Temperature: ${windowTemperature} °F</p>
            <p class="card-text">Weather: ${windowWeather}</p>
            <p class="card-text">Humidity: ${windowHumidity}%</p>
            <p class="card-text">Wind Speed: ${windowWindSpeed} m/s</p>
            </div>
        `;
        //var resultElement = document.getElementById('result');
        // resultElement.appendChild(cardElement);

        //
        var cardContainer = document.getElementById('card-container');
        cardContainer.appendChild(cardElement);
        cardContainer.classList.add('show');


        // Create a close button for the card container
        var closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.classList.add('close-button');
        cardContainer.appendChild(closeButton);

        // Hide the card container when the close button is clicked
        closeButton.addEventListener('click', function () {
            cardContainer.classList.remove('show');
        });

        // Make the card draggable
        dragElement(cardContainer);
    }


    function dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            const event = e ;
            e.preventDefault();
            // Get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e ;
            e.preventDefault();
            // Calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // Set the element's new position
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // Stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }

    }
});

//change background based on weather

function updateBackgroundImage(weatherCondition) {
    const body = document.querySelector('body');
    let imageUrl = '';

    // Set the image URL based on the weather condition
    if (weatherCondition.includes('sunny')) {
        imageUrl = 'https://media.istockphoto.com/id/531253600/photo/sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=6Nv-sJsqLktqfTTH_nrp6cjH-1gvUgehNbF3GHfL0r4=';
    } else if (weatherCondition.includes('rain')) {
        imageUrl = 'https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=';
    } else if (weatherCondition.includes('cloud')) {
        imageUrl = 'https://media.istockphoto.com/id/1023201682/photo/nimbus-moving.webp?a=1&b=1&s=612x612&w=0&k=20&c=h5BNZ1P2cCU7dwHUskA8Zt74uCkC5qiOPgzUcnrFmps=';
    } else if (weatherCondition.includes('snowing')) {
        imageUrl = 'https://plus.unsplash.com/premium_photo-1670963964733-c4b2ea8a79be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D';
    } else if (weatherCondition.includes('clear')) {
        imageUrl = 'https://media.istockphoto.com/id/1454852967/photo/cloudless-sky-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jFsxhTgVkaJNipQePJVPVrrlsZmFUva32fHGGTTQkRw=';
    } else {
        imageUrl = 'https://media.istockphoto.com/id/516351793/photo/majestic-storm-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=tDfBtifE8AHOehX8aiT2oba0vmefC_gpO2Ti-wcYBaU=';
    }
    // background image styling, need to figure how to adjust with media screen change
    body.style.backgroundImage = `url(${imageUrl})`;
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';

    console.log(document.querySelector('body'));
};
// end
