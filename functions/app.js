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

exports.handler = async (event, context, callback) => {
  const firestore = admin.firestore();

  let collections = await firestore.collection("users").get();

  let doc = collections.docs[0].ref;

  await doc
    .update({
      relation_status: "single",
    })
    .catch((err) => console.log(err));

  doc = await doc.get();
  console.log(doc.data());

  return (
    null,
    {
      statusCode: 200,
      body: JSON.stringify({
        text: "test",
      }),
    }
  );
};
