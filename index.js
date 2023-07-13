const express = require("express");
const app = express();
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
  ])
);

const cb = () => console.log(`Server Running on port ${port}`);
app.listen(port, cb());
