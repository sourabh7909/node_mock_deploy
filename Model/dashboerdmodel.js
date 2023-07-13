const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Frist_Name:String,
    Last_Name:String,
    Email:String,
    Department:String,
    Salary:Number
},{
    versionKey:false
})

const DashboredModel=mongoose.model("employees",userSchema)

module.exports={DashboredModel}