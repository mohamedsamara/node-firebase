import firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURMENT_ID
};

firebase.initializeApp(config);

const auth = firebase.auth();

const anlytics = firebase.analytics();
const remoteConfig = firebase.remoteConfig();

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000
};

export { auth, anlytics, remoteConfig };
