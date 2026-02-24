const mongooose=require("mongoose");
const userSchema=new mongooose.Schema({
name:{
    type:String,
    required:true   
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
nativeLanguage:{type:String},
learningLanguage:{type:String},bio:{type:String}},{ timestamps:true});
module.exports=mongooose.model("User",userSchema);