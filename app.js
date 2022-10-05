const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/Routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const path = require('path');
const publicPath = __dirname;

app.use(cors());
app.use(express.static(path.join(publicPath, "frontend", "build")));
app.use(express.json());


app.get("/", (req,res) => {
  res.sendFile(path.join(publicPath, "frontend" ,"build" ,"index.html"));
})

app.use("/", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
