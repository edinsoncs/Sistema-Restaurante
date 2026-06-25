'use strict';

var admin = require('firebase-admin');

var firebaseApp = null;

var projectId = process.env.FIREBASE_PROJECT_ID;
var clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
var privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (projectId && clientEmail && privateKey) {
  firebaseApp = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: projectId,
      clientEmail: clientEmail,
      privateKey: privateKey.replace(/\\n/g, '\n')
    })
  });
  console.log('Firebase Admin initialized');
} else {
  console.warn('Firebase not configured. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY in .env');
}

module.exports = firebaseApp;
