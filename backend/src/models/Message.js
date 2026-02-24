const mongooose=require("mongoose");
const messageSchema=new mongooose.Schema({
    sender:{
        type:mongooose.Schema.Types.ObjectId,ref:"User",
        required:true
    },
    reciever:{
        type:mongooose.Schema.Types.ObjectId,ref:"User",
        required:true
    },
    text:{
      type:"String",
      required:"true"
    }
},{timestamps:true});
module.exports=mongooose.model("Message",messageSchema);