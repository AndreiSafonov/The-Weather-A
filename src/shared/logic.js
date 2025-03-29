import { citiesList } from "../api/data/favorite-cities-data.js";
import { checkCityNameIsNotValidForFollowing } from "./validation.js";

function addCityToArrList(textCityName) {
    checkCityNameIsNotValidForFollowing(textCityName);

    citiesList.push(textCityName);
}

function deleteCityFromArrList(cityInUi) {
    checkCityNameIsNotValidForFollowing(cityInUi.textContent);

    const cityIndex = citiesList.findIndex(
        (city) => city === cityInUi.textContent
    );
    citiesList.splice(cityIndex, 1);
}

export { addCityToArrList, deleteCityFromArrList };
