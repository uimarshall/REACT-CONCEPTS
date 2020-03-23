import { GET_CONTACTS } from "../actions/types";
const initState = {
	contacts: [
		{
			id: 1,
			name: "Billy James",
			email: "bill@gmail.com",
			phone: "222-222-3333"
		},
		{
			id: 1,
			name: "Joy Miles",
			email: "joy@gmail.com",
			phone: "333-3333-4444"
		},
		{
			id: 1,
			name: "Tessy Brandon",
			email: "tess@gmail.com",
			phone: "444-444-5555"
		},
		{
			id: 1,
			name: "Don Ben",
			email: "bidonl@gmail.com",
			phone: "666-6666-66666"
		}
	]
};
export default function(state = initState, action) {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contact: [{}]
			};
		default:
			return state;
	}
}
