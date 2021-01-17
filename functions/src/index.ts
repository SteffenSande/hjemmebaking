import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

admin.initializeApp();
const db = admin.firestore();
const app = express();
const oppskriftCollection = db.collection("oppkrifter");

app.use(cors({ origin: "*" }));

app.get("/api/helloworld", async (req, res) => {
    res.json({msg: "Hello world!"})
    return;
})

app.get("/api/oppskrifter", async (req, res) => {
  const oppskrifterSnapshot = await oppskriftCollection.get();
  res.send(oppskrifterSnapshot.docs.map((oppskrift:any) => oppskrift.data()));
  return;
})

exports.api = functions.https.onRequest(app);
