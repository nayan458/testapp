const express = require("express");
const hbs = require("hbs");
const path = require("path");

port = process.env.PORT || 3000;
path_public = path.join(__dirname,"./public")
path_partial = path.join(__dirname,"./partials")

const app = express();


app.use(express.static(path_public))
app.set("view engine","hbs");
hbs.registerPartials(path_partial);

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(port,()=>console.log(`app is listening to port ${port}`));

