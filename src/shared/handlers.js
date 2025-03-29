import { checkInputIsEmpty } from "./validation.js";
import { processingData } from "../api/api-functions.js";
import { clearSearchInput } from "../view/ui-functions.js";
import { UI_ELEMENTS } from "../view/ui-elements.js";
import { addCityToArrList, deleteCityFromArrList } from "./logic.js";
import {
    renderFavoriteCheckbox,
    renderFavoriteCities,
} from "./render/renders.js";
import { createNotification } from "../view/notifications.js";

function handlerOnSearchForm(event) {
    event.preventDefault();
    try {
        checkInputIsEmpty(UI_ELEMENTS.SEARCH_FORM_INPUT);
        processingData(UI_ELEMENTS.SEARCH_FORM_INPUT.value);
        clearSearchInput(UI_ELEMENTS.SEARCH_FORM_INPUT);
    } catch (error) {
        createNotification(error);
    }
}

function handlerOnFavoriteCheckbox(event) {
    const checkboxIsChecked = event.target.checked === true;
    const checkboxIsNotChecked = event.target.checked === false;

    try {
        if (checkboxIsNotChecked) {
            deleteCityFromArrList(UI_ELEMENTS.CITY_NAME);
        }

        if (checkboxIsChecked) {
            addCityToArrList(UI_ELEMENTS.CITY_NAME.textContent);
        }

        renderFavoriteCities();
        renderFavoriteCheckbox(UI_ELEMENTS.CITY_NAME.textContent);
    } catch (error) {
        createNotification(error);
    }
}

function handlerOnDeleteButton(event) {
    const currenCityName = event.target.previousSibling;
    deleteCityFromArrList(currenCityName);
    renderFavoriteCities();
    renderFavoriteCheckbox(UI_ELEMENTS.CITY_NAME.textContent);
}

function handlerOnFavoriteCity(event) {
    processingData(event.target.textContent);
}

function handlerOnCloseBtnNotification(event) {
    event.target.parentElement.remove();
}

export {
    handlerOnSearchForm,
    handlerOnFavoriteCheckbox,
    handlerOnDeleteButton,
    handlerOnFavoriteCity,
    handlerOnCloseBtnNotification,
};
