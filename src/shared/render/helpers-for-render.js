import { citiesList } from "../../api/data/favorite-cities-data.js";
import { UI_ELEMENTS } from "../../view/ui-elements.js";
import { handlerOnDeleteButton, handlerOnFavoriteCity } from "../handlers.js";

function deleteAllCities() {
    const allCitiesInList = document.querySelectorAll(".cityInList");
    for (const city of allCitiesInList) {
        city.remove();
    }
}

function createCardOfCity(city) {
    const newCity = document.createElement("li");
    newCity.className = "cityInList";

    const newCityName = document.createElement("div");
    newCityName.textContent = city;
    newCityName.className = "cityInList_city-name";
    newCityName.addEventListener("click", handlerOnFavoriteCity);

    const deleteButton = document.createElement("button");
    deleteButton.className = "cityInList_delete-button";
    deleteButton.addEventListener(
        "click",
        handlerOnDeleteButton,
        removeEventListener("click", handlerOnDeleteButton)
    );

    newCity.appendChild(newCityName);
    newCity.appendChild(deleteButton);
    UI_ELEMENTS.FAVORITE_CITIES_LIST.appendChild(newCity);
}

function createAllCities() {
    citiesList.forEach((city) => {
        createCardOfCity(city);
    });
}

export { deleteAllCities, createAllCities };
