import { createAllCities, deleteAllCities } from "./helpers-for-render.js";
import { citiesList } from "../../api/data/favorite-cities-data.js";
import { UI_ELEMENTS } from "../../view/ui-elements.js";

function renderFavoriteCities() {
    deleteAllCities();

    createAllCities();
}

function renderFavoriteCheckbox(cityName) {
    const isTaskInList = citiesList.includes(cityName);

    if (isTaskInList) {
        UI_ELEMENTS.FAVORITE_CHECKBOX.checked = true;
        return;
    }

    if (!isTaskInList) {
        UI_ELEMENTS.FAVORITE_CHECKBOX.checked = false;
        return;
    }
}

export { renderFavoriteCities, renderFavoriteCheckbox };
