const express = require("express");
const app =  express();
app.use(express.json())   
const mainrouter = require("./routes/index")
const cors = require("cors")
app.use(cors());


app.use("/api/v1", mainrouter )

app.listen(3000, ()=> console.log("smooth "))