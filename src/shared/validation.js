import { ERRORS_MESSAGES } from "./error-messages.js";

function checkDataCodIsNot200(data) {
    if (data.cod !== 200) {
        throw new Error(data.message);
    }
}

function checkInputIsEmpty(input) {
    if (input.value.trim().length === 0) {
        throw new Error(ERRORS_MESSAGES.INPUT_IS_EMPTY);
    }
}

function checkCityNameIsNotValidForFollowing(cityName) {
    if (cityName.trim() === "-City-") {
        throw new Error(ERRORS_MESSAGES.CITY_IS_NOT_VALID);
    }
}

export {
    checkDataCodIsNot200,
    checkInputIsEmpty,
    checkCityNameIsNotValidForFollowing,
};
