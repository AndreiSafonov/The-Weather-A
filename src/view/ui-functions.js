import { UI_ELEMENTS } from "./ui-elements.js";
import { renderFavoriteCheckbox } from "../shared/render/renders.js";

function changeUiInformationAboutCity(data) {
    const dataCityName = data.name;
    const dataCityTemperature = `${Math.round(data.main.temp)}°`;
    const dataWeatherIcon = data.weather[0].icon;

    UI_ELEMENTS.CITY_NAME.textContent = dataCityName;
    UI_ELEMENTS.CITY_TEMPERATURE.textContent = dataCityTemperature;

    UI_ELEMENTS.CITY_IMG.className = `information-about-city-block_img-${dataWeatherIcon}`;

    renderFavoriteCheckbox(dataCityName);
}

function clearSearchInput(input) {
    const searchInput = input;
    searchInput.value = null;
}

export { changeUiInformationAboutCity, clearSearchInput };
