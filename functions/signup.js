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

exports.handler = async (event, context, callback) => {
  const { email, password } = JSON.parse(event.body);

  await admin
    .auth()
    .createUser({
      email: email,
      emailVerified: true,
      password: password,

      disabled: false,
    })
    .then(async (userRecord) => {
      const uid = userRecord.uid;
      const email = userRecord.email;

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
