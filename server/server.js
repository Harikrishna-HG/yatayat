require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const busRoute = require("./router/bus-router.js");

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/bus", busRoute);

app.use(errorMiddleware);

const port = 5000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
