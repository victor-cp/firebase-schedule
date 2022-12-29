const express = require("express");
const { storage } = require("../firebase/config");

const router = express.Router();

// router.get("/", async (req, res) => {
//   const querySnapshot = await storage.collection("contacts").get();
//   const contacts = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     // firstname: doc.data().firstname,
//     // lastname: doc.data().lastname,
//     // email: doc.data().email,
//     // phone: doc.data().phone,
//     ...doc.data(),
//   }));
//   console.log(contacts);
//   res.render("pages/index", {
//     contacts: contacts,
//   });
//   // res.redirect("/");
// });

// CRUD

router.post("/postContact", async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;

  await storage.collection("contacts").add({
    firstname,
    lastname,
    email,
    phone,
  });

  res.redirect("/");
});

router.post("/editContact/updateContact/:id", async (req, res) => {
  const { id } = req.params;
  await storage.collection("contacts").doc(id).update(req.body);
  res.redirect("/");
});

router.get("/editContact/:id", async (req, res) => {
  const doc = await storage.collection("contacts").doc(req.params.id).get();
  res.render("pages/update", {
    contact: {
      id: doc.id,
      ...doc.data(),
    },
  });
});

router.get("/deleteContact/:id", async (req, res) => {
  await storage.collection("contacts").doc(req.params.id).delete();
  res.redirect("/");
});

module.exports = router;
