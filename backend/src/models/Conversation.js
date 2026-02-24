const mongooose=require("mongoose");
const conversationSchema=new mongooose.Schema({
    participants:[ 
        {
            type:mongooose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    lastMessage:{
        type:mongooose.Schema.Types.ObjectId,
        ref:"Message"
    }
},{timestamps:true});
module.exports=mongooose.model("ConverSation",conversationSchema);