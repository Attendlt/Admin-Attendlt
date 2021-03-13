const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");
const databaseURL = require("../constants/databaseURL");
// const uuid = require("uuid");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL,
  });
} else {
  admin.app();
}

exports.handler = async (event, context, callback) => {
  // first check ki banda hamarada database ma ka bhi yeh faltu ma chutiyapa kaat rha ha..
  // uska baad agar wo admin yeh institute ka banda ha to aage bharo nahi to nikal loda,
  // patli gali sa nikal
  const { email } = JSON.parse(event.body);

  const createCustomToken = async (uid) => {
    await admin
      .auth()
      .createCustomToken(uid)
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

  await admin
    .auth()
    .getUserByEmail(email)
    .then(async (user) => {
      if (user) {
        const uid = user.uid;

        createCustomToken(uid);
      } else {
        return callback(null, {
          statusCode: 400,
          body: JSON.stringify({
            error: "User doesn't exists",
          }),
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          error: err,
        }),
      });
    });
};
