require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send({status: "Server Running"});
});

app.get("test", (req, res) => {
    res.send({status: "Test route running!"})
})

const port = process.env.PORT || "0.0.0.0";
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})
