import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import 'firebase/firestore';

//initialize firebase inorder to access its services
admin.initializeApp();

const db = admin.firestore();

const oppskriftCollection = db.collection("oppkrifter");

//initialize express server
const app = express();
const main = express();

app.get("/", async (req, res) => {
  res.send("ok");
});

app.get("/oppskrifter", async (req, res) => {
  console.log("Treffer dette endepunktet.")
  const oppskrifterSnapshot = await oppskriftCollection.get();
  res.send(oppskrifterSnapshot.docs.map((oppskrift:any) => oppskrift.data()));
});

main.use('/api/v1', app);

const api = functions.https.onRequest(main);
export { api };
