//setting default background image before user enters data
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1479888230021-c24f136d849f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsaW5nJTIwbHVnZ2FnZXxlbnwwfHwwfHx8MA%3D%3D')";
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.margin = '0';
document.body.style.height = '100vh';

/////////////////////////
//trying modal
///////////////////////

const modal = document.getElementById("reset-popup");
const modalBtn = document.getElementById("reset");
const resetYes = document.getElementById("reset-yes");
const resetNo  = document.getElementById("reset-no");



modalBtn.onclick = function() {
    modal.style.display = "block";
}

resetNo.onclick = function() {
    modal.style.display = "none";               
}

resetYes.addEventListener('click' , function() {
    localStorage.clear();
    location.reload();
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modal.style.display = "none";







// Event listener for the weather form
document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // this.style.display = 'none';h

    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    //const country = document.getElementById('country').value;
    const country = 'USA';
    const limit = 1;
    const apiKey = 'ae6228c596430403bdb4b85fa54b467a'; // My API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`; //imperial 

    
   const searchLimit = 2;
 
    //gets weather data from openweather api
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { 
         
                // Export weather and save to local storage to use later
                var city = document.getElementById('city').value;
                var state = document.getElementById('state').value;
                var weatherDataArray = JSON.parse(localStorage.getItem('weatherData')) || [];
                var weatherData = {
                    city: city,
                    state: state,
            
                };
            
                if (weatherData.length != 0) {
                    weatherDataArray.push(weatherData);
                }
                if (weatherDataArray.length > searchLimit) {
                    weatherDataArray.splice(0, weatherDataArray.length - searchLimit);
                }
            
                localStorage.setItem('weatherData', JSON.stringify(weatherDataArray));
               
               
                const weatherExtra = {
                    weather: data.weather[0].description,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed
                };

                let weatherExtraArray = JSON.parse(localStorage.getItem('weatherExtra')) || [];
                weatherExtraArray.push(weatherExtra);
                if (weatherExtraArray.length > searchLimit) {
                    weatherExtraArray.splice(0, weatherExtraArray.length - searchLimit);
                }
                localStorage.setItem('weatherExtra', JSON.stringify(weatherExtraArray));

                //clear text fields
                document.getElementById("city").value = "";
                document.getElementById("state").value = "";

                //will have cards display when click submit/GetWeather
                displayWeatherCards(weatherDataArray.slice(0, searchLimit), weatherExtraArray.slice(0, searchLimit));

            } else {
                document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Error: ${data.message}</div>`;
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Failed to fetch weather data. Please try again later.</div>`;
            console.error('Error:', error);
        });
});


console.log(localStorage.getItem('weatherData'));

//creates the weather cards

function displayWeatherCards(weatherDataArray, weatherExtraArray) {
    const container = document.getElementById('weather-cards-container');
    container.innerHTML = ''; // Clear previous cards

    if (!container) {
        console.error('Element with id "weather-cards-container" not found.');
        return;
    }

    // Log data to check if arrays are correctly populated
    console.log('Weather Data Array:', weatherDataArray);
    console.log('Weather Extra Array:', weatherExtraArray);

    // Ensure both arrays are the same length
    const numberOfCards = Math.min(weatherDataArray.length, weatherExtraArray.length);

    if (numberOfCards === 0) {
        console.warn('No data to display.');
        return;
    }

    for (let i = 0; i < numberOfCards; i++) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'col-sm-6 mb-3 mb-sm-0';


        const card = document.createElement('div');
        card.className = 'card card-bg text-center border-dark';
        card.id = `myCard${i}`;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body rounded';
        
        const cityName = document.createElement('h3');
        cityName.textContent = `${weatherDataArray[i].city.toUpperCase()}, ${weatherDataArray[i].state.toUpperCase()}`;

        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${weatherExtraArray[i].temperature}°F`;

        const weather = document.createElement('p');
        weather.className = 'card-text';
        weather.textContent = `Weather: ${weatherExtraArray[i].weather}`;
        
        const humidity = document.createElement('p');
        humidity.className = 'card-text';
        humidity.textContent = `Humidity: ${weatherExtraArray[i].humidity}%`;

        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${weatherExtraArray[i].windSpeed} m/s`;

        cardBody.appendChild(cityName);
        cardBody.appendChild(temperature);
        cardBody.appendChild(weather);
        cardBody.appendChild(humidity);
        cardBody.appendChild(windSpeed);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
    
        container.appendChild(cardContainer);

        //updateBackgroundImage(weatherExtraArray[i].weather);
        updateBackgroundImage(weatherExtraArray[i].weather,`myCard${i}`);
        
        }
}

// Retrieve data from localStorage or initialize empty arrays
const weatherDataArray = JSON.parse(localStorage.getItem('weatherData')) || [];
const weatherExtraArray = JSON.parse(localStorage.getItem('weatherExtra')) || [];

// Log retrieved data to verify
console.log('Retrieved Weather Data Array:', weatherDataArray);
console.log('Retrieved Weather Extra Array:', weatherExtraArray);

// Display only the first 2 cards from each array
//displayWeatherCards(weatherDataArray.slice(0, searchLimit), weatherExtraArray.slice(0, searchLimit));


///to change backgroun image based on selected destination
function updateBackgroundImage(weatherCondition, cardId) {
    const cardImg = document.getElementById(cardId);
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
        imageUrl = 'https://images.pexels.com/photos/2102367/pexels-photo-2102367.jpeg?auto=compress&cs=tinysrgb&w=600';
    } else {
        imageUrl = 'https://media.istockphoto.com/id/516351793/photo/majestic-storm-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=tDfBtifE8AHOehX8aiT2oba0vmefC_gpO2Ti-wcYBaU=';
    }
    // background image styling, need to figure how to adjust with media screen change
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.style.backgroundRepeat = 'no-repeat';
    //card.style.backgroundSize = 'cover';
    cardImg.style.backgroundPosition = 'center';
   // card.style.margin = '1';
    cardImg.style.height = '30vh';
};

// // This function will be called when the page loads
// function clearLocalStorage() {
//     localStorage.clear();
//     console.log('Local storage cleared!');
// }

// // Add event listener for the 'DOMContentLoaded' event
// document.addEventListener('DOMContentLoaded', clearLocalStorage);


// end
