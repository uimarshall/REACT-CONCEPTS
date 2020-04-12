import { NOTIFY_USER } from "./actionTypes";
export const notifyUser = (message, messageType) => {
	return {
		type: NOTIFY_USER,
		message: message,
		messageType: messageType,
	};
};
