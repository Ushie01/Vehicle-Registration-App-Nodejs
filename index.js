const express = require("express");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const { exec } = require('child_process');
const authRouter = require("./src/routes/authRoute");
const userRouter = require("./src/routes/userRoute");
const adminRouter = require("./src/routes/adminRoute")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const corsOptions = {
  origin: 'https://vehicle-registration-app.vercel.app',
  methods: 'GET, POST, PUT, DELETE, PATCH',
  optionsSuccessStatus: 200
};

index.use(cors(corsOptions));

// app.use(cors(corsOptions)) 
app.use('/uploads', express.static('uploads'));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter)


const port = 5173;
app.listen(port, () => {
  console.log('Serving on port ' + port);
});
