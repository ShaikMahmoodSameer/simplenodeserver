require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send({status: "Server Running"});
});

app.get("/test", (req, res) => {
    res.send({status: "Testing route running!"})
})

const port = process.env.PORT || 3555;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})
