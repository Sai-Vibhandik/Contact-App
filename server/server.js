const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config(); // load env variables
connectDb(); // connect to Db

const app = express();

// middleWares
app.use(cors());
app.use(express.json()); //parse json body

//Routes 
app.use("/api/contacts",contactRoutes);


//Basic route
app.get("/",(req,res)=>{
    res.send("Contact Manager API is running ")
});








const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
})

//OQZZJMMlfPYAyVW9