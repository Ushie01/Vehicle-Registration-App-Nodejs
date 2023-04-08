const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const authRouter = require("./routes/authRoute")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user', authRouter);


const port = 5173;
app.listen(port, () => {
  console.log('Serving on port ' + port);
});
