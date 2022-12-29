const express = require("express");
const server = express();
const morgan = require("morgan");
// require route
const contactRouter = require("./routes/contactRouter");
const { storage } = require("./firebase/config");

///////////////////////////////////////////////// SETTINGS
// inicializando, view engine setup
server.set("views", "./views");
server.set("view engine", "ejs");

///////////////////////////////////////////////// MIDDLEWARES
// morgan
server.use(morgan("dev"));
// When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

////////////////////////////////////////////////// ROUTES
server.get("/", async (req, res) => {
  const querySnapshot = await storage.collection("contacts").get();
  const contacts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  //console.log(contacts);
  res.render("pages/index", {
    contacts: contacts,
  });
});

server.use(contactRouter);

///////////////////////////////////////////////// STATIC FILES
// middleware para files estáticos
server.use(express.static("./estilos"));

module.exports = server;

// GET Method
// server.get("/", (req, res) => {
//   //   console.log(db);
//   res.render("index");
// });

// // POST Method
// server.post("/agregar", async (req, res) => {
//   const contacto = {
//     nombre: req.body.nombre,
//     numero: req.body.numero,
//     direccion: req.body.direccion,
//     telefono: req.body.telefono,
//   };

//   const querySnapshot = await storage.collection("contacts").get();
//   // const storageRef = ref(db, "1");
//   // await uploadBytes(storageRef, contacto);

//   console.log(querySnapshot);
//   res.redirect("/");
// });
