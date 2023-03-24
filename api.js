const axios = require('axios');

const fetchWeatherData = async () => {
    const { data } = await axios.get(
        'https://raw.githubusercontent.com/GravityAbrahxm/PelisApi/main/peliculas.json'
    );
    console.log(data);
}
fetchWeatherData();