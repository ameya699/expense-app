const mongoose=require("mongoose");

const schema=mongoose.Schema;
const expenseSchema=new mongoose.Schema({
    expensename:{
        type:String,
        required:true
    },
    expenseamount:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    createdon:{
        type:Date,
        default:new Date()
    }
})



module.exports=mongoose.model("expense",expenseSchema)