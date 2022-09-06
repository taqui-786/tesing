const express = require('express');
const app = express();
const path = require('path')
const port =  process.env.PORT || 8080;
const staticpath = path.join( __dirname,"/public")
const public = path.join(__dirname,"/public 2")
// console.log(public)
app.use(express.static(staticpath));
app.set("view engine","hbs")
app.set("views",public)
app.get("/", (req , res) =>{
res.render("index2")
});
app.get("/about", (req , res) =>{
res.render("index2")
   })
   app.listen(port,()=>{console.log("listinig to the server " + port)})