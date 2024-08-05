const apiKey ='f00c38e0279b7bc85480c3fe775d518c';
const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    if (location) {
        getWeatherData(location);
    } else {
        showError('Please enter a location');
    }
});

async function getWeatherData(location) {
    try {
        const response = await fetch(`${apiBaseUrl}?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        updateWeatherInfo(data);
    } catch (error) {
        showError(error.message);
    }
}

function updateWeatherInfo(data) {
    document.getElementById('city').textContent = `Weather in ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('conditions').textContent = `Conditions: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weatherIcon').src = iconUrl;

    document.querySelector('.weather-info').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    document.querySelector('.weather-info').style.display = 'none';
}
