const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/database");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/biodata", require("./src/routes/biodata.routes"));
app.use("/api/admin", require("./src/routes/admin.routes"));

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch(console.error);

app.listen(5001, () => console.log("API running on port 5001"));
