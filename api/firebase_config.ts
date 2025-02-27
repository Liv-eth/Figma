/**
 * Firebase Initialization and configuration module
 * This module handles setup for tbe firebase module
 * @module
 */
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from "@firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

//=====================================================================================
//  CONFIGURATION
//=====================================================================================

/**
 * Firebase configuration object containing all necessary credentials
 * @type {object}
 */
console.log("API Key:", process.env.EXPO_PUBLIC_FIREBASE_API_KEY);
console.log("Auth Domain:", process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN);

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
}

//=====================================================================================
//  Firebase Initialization
//=====================================================================================

/**
 * Initialize firebase application
 * @type {firebaseApp: app}
 */
const app = initializeApp(firebaseConfig);

/**
 * Initialize firebase authentication service
 * @type {Auth: auth}
 */
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})

export {auth};
export default app;