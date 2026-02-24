const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/auth.middleware");
const message=require("../models/Message");
const conversation=require("../models/Conversation");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
router.post("/",authMiddleware,async(req,res)=>{
    try {
        const {receiverId,text}=req.body;
        if(!receiverId || !text){
            return res.status(400).json({message:"Receiver and text required"});
        }
        let conversation=await Conversation.findOne({ participants:{$all:[req.user.id,receiverId]}
        });
        if(!conversation){
            conversation=await Conversation.create({
                participants:[req.user.id,receiverId]
            });
        }
        const message=await Message.create({
            sender:req.user.id,
            reciever:receiverId,text
        });
        conversation.lastMessage=message._id;
        await conversation.save();
        res.status(201).json(message);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});
router.get("/:receiverId",authMiddleware,async(req,res)=>{
    try{
        const {ConversationId}=req.params;
        const messages=await message.find({
            $or:[
                {sender:req.user.id,reciever:receiverId},
                {sender:receiverId,reciever:req.user.id}
            ]
        }).sort({ createdAt:1});
        res.json(message);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});
module.exports=router;