const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/auth.middleware")
const User=require("../models/User")
router.get("/me",authMiddleware,async(req,res)=>{
    try{
        const user=await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(404).json({message:"User not find"});
        }
        res.json(user);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});
router.put("/me",authMiddleware,async(req,res)=>{
    try{
    const {nativeLanguage,learningLanguage,bio}=req.body;
    const updatedUser=await User.findByIdAndUpdate(req.user.id,{nativeLanguage,learningLanguage,bio},{new:true}).select("-password");
    res.json(updatedUser);   
    }catch(error){
        res.status(500).json({error:error.message});
    }
})
router.get("/partners",authMiddleware,async(req,res)=>{
    try{
        const currentUser=await User.findById(req.user.id);
        if(!currentUser.nativeLanguage || !currentUser.learningLanguage){
            return res.status(400).json({message:"Please update your Language prefrefences first"});
        }
    const partners=await User.find({
        nativeLanguage:currentUser.learningLanguage,learningLanguage:currentUser.nativeLanguage,_id:{$ne:currentUser._id}
    }).select("-password");
    res.json({count:partners.length,partners});
}catch(error){
    res.status(500).json({error:error.message})
}
});
module.exports=router;