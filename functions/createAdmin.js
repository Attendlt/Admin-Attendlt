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

// admin can only be created my another admin
exports.handler = async (event, context, callback) => {
  // first check whether the auth user is admin or not
  //   const { authUserUid, email } = JSON.parse(event.body);

  const { email } = JSON.parse(event.body);

  await admin
    .auth()
    .getUserByEmail(email)
    .then(async (user) => {
      await admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Success! ${email} has been made an admin`,
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
};
