import { handlerOnCloseBtnNotification } from "../shared/handlers.js";
import { UI_ELEMENTS } from "./ui-elements.js";
const TIME_CLEAR_NOTIFICATION = 5000;

export function createNotification(message) {
    const newNotification = document.createElement("div");
    newNotification.className = "new-notification";

    const textError = document.createElement("div");
    textError.className = "text-notification";
    textError.textContent = message;

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-notification-btn";
    closeBtn.addEventListener(
        "click",
        handlerOnCloseBtnNotification,
        removeEventListener("click", handlerOnCloseBtnNotification)
    );

    UI_ELEMENTS.NOTIFICATIONS_LIST.appendChild(newNotification);
    newNotification.appendChild(textError);
    newNotification.appendChild(closeBtn);

    setTimeout(() => newNotification.remove(), TIME_CLEAR_NOTIFICATION);
}
