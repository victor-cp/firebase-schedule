const app = require("./server.js");
const PORT = 8000;

app.listen(PORT, (req, res) => {
  console.log(`aplicación iniciada en localhost://${PORT}`);
});
