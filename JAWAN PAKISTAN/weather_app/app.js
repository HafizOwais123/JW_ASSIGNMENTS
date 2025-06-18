const API_KEY = "f38ea48a576b35ac9d333500edd62535";
const input = document.getElementById("searchInput");
const resultDiv = document.getElementById("weatherResult");

const searchData = async () => {
    const city = input.value.trim();
    if (!city) {
        resultDiv.innerHTML = `<p class="text-danger">Please enter a city name.</p>`;
        return;
    }

    resultDiv.innerHTML = `<div class="spinner-border text-primary" role="status">
                              <span class="visually-hidden">Loading...</span>
                           </div>`;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        if (data.cod !== 200) {
            resultDiv.innerHTML = `<p class="text-danger">${data.message}</p>`;
            return;
        }

        showWeather(data);
    } catch (error) {
        resultDiv.innerHTML = `<p class="text-danger">Something went wrong. Please try again.</p>`;
        console.error(error);
    }
};

const showWeather = (data) => {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { icon, description, main } = data.weather[0];

    resultDiv.innerHTML = `
        <h3>${name}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" class="weather-icon">
        <h4>${main} - ${description}</h4>
        <p class="mb-1"><strong>Temperature:</strong> ${temp}°C</p>
        <p class="mb-1"><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${speed} m/s</p>
    `;
};
