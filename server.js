const express=require("express");
const app=express();
const PORT=process.env.PORT || 5000;
const dbconnection=require("./config/dbConnection");
const expenseSchema=require("./models/expense");
const bodyParser = require("body-parser");
const cookiesecret="bloggycookiesecret";
const saltrounds=10;


app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.listen(PORT,()=>{
    dbconnection();
    console.log(`Listening on ${PORT}`);
})

app.get("/",(req,res)=>{
   
    res.render("index");
})

app.post("/",async(req,res)=>{
    const expense=req.body.expense.trim();
    const amount=req.body.amount.trim();
    if(expense==null && amount ==null){
        res.redirect("/");
    }
    else{
        const isdataentered=await expenseSchema.create({
            expensename:expense,
            expenseamount:Number(amount)
        })
        res.redirect("/");
    }
})


  
