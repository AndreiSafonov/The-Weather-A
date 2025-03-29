import { processingData } from "./api-functions.js";

export function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;

        processingData("", currentLatitude, currentLongitude);
    });
}
