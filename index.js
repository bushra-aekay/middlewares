import express from "express";
import { dirname } from "path"; //importing directory name from the path module that is bundled with the node module
import { fileURLToPath } from "url"; //applying converstion
import bodyParser from "body-parser"; 
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url)); //import.meta.url gets url of current module, which is then converted to path, from which the dir name is taken and stored in __dirname
const app = express();
const port = 3000;

app.use(logger);
app.use(bodyParser.urlencoded({extended: true})); //the code to use body parser
app.use(morgan("combined")); //code to use morgan middleware where combined is the type of details you want.

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html"); //requires exact path to know which file to send back. In order to get the full path - where like most servers, yours is hosted on a cloud then toget the file naem it takes a little bit of work.
});

app.post("/login",(req,res)=>{
    console.log(req.body);
});

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
});

function logger(req, res, next){
    console.log("Requested method:", req.method);
    console.log("Requested URL:", req.url);
    next();
}