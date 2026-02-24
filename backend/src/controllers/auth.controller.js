const jwt =require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const User=require("../models/User");
exports.register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=new User({name,email,password:hashedPassword});
        await newUser.save();
        res.status(201).json({message:"User registed successfully"});
    }catch (error){
        res.status(500).json({error:error.message});
    }
};
exports.login= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"invalid password"});
        }
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );
        res.status(200).json({message:"Login Successful",token,
            user:{id:user._id,email:user.email}
        });
    }catch (error){
     res.status(500).json({error:error.message})
    }
};
