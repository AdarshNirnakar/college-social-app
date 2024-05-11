const admin = require("firebase-admin");

const serviceAccount = require("config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then(() => next())
      .catch(() => res.status(403).send("Unauthorised"));
  } else {
    res.status(403).send("Unauthorised");
    return;
  }
}
