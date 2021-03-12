const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://forum-8f2e6.firebaseio.com",
  });
} else {
  admin.app();
}
