const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
