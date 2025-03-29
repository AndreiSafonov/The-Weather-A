import { checkDataCodIsNot200 } from "../shared/validation.js";
import { changeUiInformationAboutCity } from "../view/ui-functions.js";
import { createNotification } from "../view/notifications.js";
import { getUrl } from "./api-url.js";

function getData(cityName, latitude, longitude) {
    const currentUrl = getUrl(cityName, latitude, longitude);

    return fetch(currentUrl).then((response) => response.json());
}

export function processingData(cityName, latitude, longitude) {
    getData(cityName, latitude, longitude)
        .then((data) => {
            checkDataCodIsNot200(data);
            changeUiInformationAboutCity(data);
        })
        .catch((error) => {
            createNotification(error);
        });
}
