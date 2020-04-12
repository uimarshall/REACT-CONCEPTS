import { NOTIFY_USER } from "../actions/actionTypes";

const initState = {
	message: null,
	messageType: null,
};

export default function (state = initState, action) {
	switch (action.type) {
		case NOTIFY_USER:
			return {
				...state,
				message: action.message,
				messageType: action.messageType,
			};

		default:
			return state;
	}
}
