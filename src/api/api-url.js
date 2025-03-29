const SERVER = {
    serverUrl: "http://api.openweathermap.org/data/2.5/weather",
    apiKey: "f660a2fb1e4bad108d6160b7f58c555f",
    partOfUrlForTemperatureInCelsius: "&units=metric",
};

function getUrl(cityName, latitude, longitude) {
    const url = `${SERVER.serverUrl}?q=${cityName}&appid=${SERVER.apiKey}${SERVER.partOfUrlForTemperatureInCelsius}&lat=${latitude}&lon=${longitude}`;

    return url;
}

export {SERVER, getUrl}