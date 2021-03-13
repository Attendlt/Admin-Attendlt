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

exports.handler = async (event, context, callback) => {
  const { email, password, phoneNumber } = JSON.parse(event.body);

  const setCustomUserClaims = async (uid, email, phoneNumber) => {};

  await admin
    .auth()
    .createUser({
      email: email,
      emailVerified: true,
      password: password,
      phoneNumber: phoneNumber,
      disabled: false,
    })
    .then(async (userRecord) => {
      const uid = userRecord.uid;
      const email = userRecord.email;
      const phoneNumber = userRecord.phoneNumber;

      await admin
        .auth()
        .setCustomUserClaims(uid, {
          admin: false,
        })
        .then(() => {
          return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              uid: uid,
              email: email,
              phoneNumber: phoneNumber,
              message: `Success! ${email} has been registered as institute`,
            }),
          });
        })
        .catch((err) => {
          return callback(null, {
            statusCode: 400,
            body: JSON.stringify({
              error: err,
            }),
          });
        });
    })
    .catch((err) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          error: err,
        }),
      });
    });
};
