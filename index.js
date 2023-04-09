const express = require("express");
const jwt = require("jsonwebtoken");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoute")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start file upload using multer

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter)


const port = 5173;
app.listen(port, () => {
  console.log('Serving on port ' + port);
});
