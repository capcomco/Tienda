const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const ventasRoutes = require("./routes/ventas");
const productRoutes = require("./routes/product");

const app = express();
const port = process.env.PORT || 9000;

//middleware

app.use(express.json());
app.use('/api', userRoutes);

app.use(express.json());
app.use('/api', ventasRoutes);

app.use(express.json());
app.use('/api', productRoutes);

//routes
app.get("/", (req,res) => {
    res.send("Api funcionando");
});

//mongoosedb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.error(error));


app.listen(port,()=>console.log('server listening on port', port));
