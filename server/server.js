const express = require('express');
const ConnectDB = require('./config/db');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const port = process.env.PORT;
const authRoutes = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");


ConnectDB();


//middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);


app.listen(port, console.log("running server on port " + port));

app.use('', (req, res) => {
    res.send("hello");
})
