document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "e66e1b74cfbee6ebb248668880fb5db6";

    const cityInput = document.querySelector("#city-input");
    const searchBtn = document.getElementById("search");

    const cidadeNome = document.querySelector("#cidade");
    const temperatura = document.querySelector("#temperatura span");
    const descElement = document.querySelector("#description");
    const weatherIconElement = document.querySelector("#weather-icon");
    const pais = document.querySelector("#pais");
    const umidade = document.querySelector("#umidade span");
    const vento = document.querySelector("#vento span");
    const dataTempo = document.querySelector("#infoTempo");

    const getWeatherData = async (city) => {
        const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
        const res = await fetch(apiWeatherUrl);
        const data = await res.json();
        return data;
    }

    const showWeatherData = async (city) => {
        const data = await getWeatherData(city); 
        cidadeNome.innerText = data.name;
        temperatura.innerText = parseInt(data.main.temp);
        descElement.innerText = data.weather[0].description;
        weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        umidade.innerText = `${data.main.humidity}%`;
        vento.innerText = `${data.wind.speed}km/h`
        dataTempo.classList.remove("hide")
    }

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const city = cityInput.value; 

        //console.log("Cidade:", city);
        showWeatherData(city)
    });
});
