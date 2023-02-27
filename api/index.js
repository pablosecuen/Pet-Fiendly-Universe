require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const port = process.env.port || 3001;

conn.sync().then(() => {
  server.listen(port, () => {
    console.log("%s listening at 3001");
  });
});
