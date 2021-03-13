const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");
const databaseURL = require("../constants/databaseURL");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: databaseURL,
  });
} else {
  admin.app();
}

/**
 * check whether the user is admin or institute
 * if admin then nikal loda
 * else give access to all the data of the particular institute
 */
exports.handler = async (event, context, callback) => {};
