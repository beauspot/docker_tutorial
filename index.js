const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(helmet());

const port = 3000;

app.get("/", (req, res) =>
  res.status(200).json([
    {
      userData: {
        name: "Iyere Handsome Omogbeme",
        email: "beauspot@gmail.com",
        age: 26,
        gender: "male",
        monthlyIncome: 500000,
        isDeveloper: true,
      },
    },
    {
      userData: {
        name: "Iyere Paul Akhuomo",
        email: "akhuomo@gmail.com",
        age: 22,
        gender: "male",
        monthlyIncome: 50000,
        isDeveloper: true,
      },
    },
    {
      userData: {
        name: "Omoyemi Empress",
        email: "empress@yahoo.com.com",
        age: 29,
        gender: "female",
        monthlyIncome: 5000000,
        isDeveloper: true,
      },
    },
    {
      userData: {
        name: "testing user",
        email: "testinguser@yahoo.com.com",
        age: 20,
        gender: "female",
        monthlyIncome: 5000,
        isDeveloper: true,
      },
    },
  ])
);

const cb = () => console.log(`Server Running on port ${port}`);
app.listen(port, cb());
