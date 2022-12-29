// Creando una variable de entorno
require("dotenv").config();

// Import the functions you need from the SDKs you need
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  credential: applicationDefault(),
  // databaseURL: "https://node-firebase-example-5a566-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getFirestore(app);

module.exports = { storage };
