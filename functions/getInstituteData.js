const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");
const databaseURL = require("../constants/databaseURL");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL,
  });
} else {
  admin.app();
}

exports.handler = async (event, context, callback) => {};
