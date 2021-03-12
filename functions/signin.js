const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");
import { v4 as uuidv4 } from "uuid";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://forum-8f2e6.firebaseio.com",
  });
} else {
  admin.app();
}

exports.handler = async (event, context, callback) => {
  await admin
    .auth()
    .createCustomToken(uuidv4())
    .then((customToken) => {
      // Send token back to client
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          token: customToken,
        }),
      });
    })
    .catch((error) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          error: error,
        }),
      });
    });
};
