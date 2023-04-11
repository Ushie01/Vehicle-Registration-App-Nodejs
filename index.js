const express = require("express");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoute")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(helmet({
//     crossOriginResourcePolicy: false,
// }));
// Start file upload using multer
//implement CORS
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter)


const port = 5173;
app.listen(port, () => {
  console.log('Serving on port ' + port);
});
