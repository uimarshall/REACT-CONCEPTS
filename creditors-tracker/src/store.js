import firebase from "firebase";
// import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import notifyReducer from "./reducers/notifyReducer";
const firebaseConfig = {
	apiKey: "AIzaSyDhy18AAyIQBTWW4YbkX8rU9pqel0_JyQI",
	authDomain: "creditors-tracker.firebaseapp.com",
	databaseURL: "https://creditors-tracker.firebaseio.com",
	projectId: "creditors-tracker",
	storageBucket: "creditors-tracker.appspot.com",
	messagingSenderId: "924966630617",
	appId: "1:924966630617:web:e2d70761e07a5bd9e5fac8",
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
// const settings = { timestampsInSnapshots };
// firestore.settings(settings);

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer, // <- needed if using firestore
	notify: notifyReducer,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
	rootReducer,
	initialState,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
