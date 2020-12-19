import 'dotenv/config';

import firebase from 'firebase-admin';

const serviceAccount = {
  type: 'service_account',
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PROJECT_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: process.env.CLIENT_CERT_URL
};

export const admin = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
  //   databaseURL: process.env.FIREBASE_DATABASE_URL
});

export const db = firebase.firestore();
