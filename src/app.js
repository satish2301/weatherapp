const express = require('express');
const path=require('path');
const app = express();
const port=process.env.PORT || 8000;
const staticpath=path.join(__dirname,"../public");
console.log(staticpath);
app.set('view engine', 'hbs');
app.use(express.static(staticpath));


app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/weather",(req, res)=>{
    res.render('weather')
});

app.get("/about",(req, res)=>{
    res.render('about')
});

app.get("*",(req, res)=>{
    res.render('404 error page');
})
app.listen(port,()=>{
    console.log("Listening on port"+port);
});