import { UI_ELEMENTS } from "./view/ui-elements.js";
import {
    handlerOnSearchForm,
    handlerOnFavoriteCheckbox,
} from "./shared/handlers.js";
import { renderFavoriteCities } from "./shared/render/renders.js";
import { getCurrentLocation } from "./api/get-current-location.js";

UI_ELEMENTS.SEARCH_FORM.addEventListener("submit", handlerOnSearchForm);
UI_ELEMENTS.FAVORITE_CHECKBOX.addEventListener(
    "click",
    handlerOnFavoriteCheckbox
);

getCurrentLocation();
renderFavoriteCities();
