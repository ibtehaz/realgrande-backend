let express = require('express');
const allrouter = require('./routes/allRoutes');
let app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

let corsOptions = {
    origin: process.env.FRONTENDURI,
}

app.use(cors(corsOptions));

let db = async () => {
    try{
        await mongoose.connect(process.env.DBURI)
        console.log("Connected to database");

        
    }
    catch(err){
    console.log(err)
    //    res.status(500).send("Error connecting to database");
    }
}

db();

app.use((req,res,next) => {

   
   
    console.log("Request received at " + new Date(Date.now()));
    next();
});



app.use('/',allrouter);


// connect to the database
// schema
// models
// using model to get data from the database









app.listen(process.env.PORT,()=>{ console.log("Backend server listening at port 4000")});