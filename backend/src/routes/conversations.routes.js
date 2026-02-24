const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/auth.middleware");
const ConverSation=require("../models/Conversation");
const Conversation = require("../models/Conversation");
router.get("/",authMiddleware,async(req,res)=>{
    try{
        const conversations=await Conversation.find({
            participants:req.user.id
        }).populate("participants","-password").populate("lastMessage").sort({updatedAt:-1});
        res.json(conversations)
    }catch(error){
        res.status(500).json({error:error.message});
    }
});
module.exports=router;