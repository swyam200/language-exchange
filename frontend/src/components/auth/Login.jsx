import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import API from "../../api/axios";
export default function Login(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!email && !password){
           alert("please enter the email and password");
           return;
        }
        try{
            setLoading(true);
            const res= await API.post("/auth/login",{email,password,});
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("name",res.data.user.name);
            navigate("/dashboard");
        }catch(error){
            console.error(error);
            alert("Invalid email or password");
        } finally{
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-col-2">
            <div className="flex  items-center justify-center bg-blue-600 text-white">
                <div className="text-center px-10">
                    <h1 className="text-4xl font-bold">Language Exchange</h1>
                    <p className="mt-2">Practice Language with people around the world</p>
                </div>
            </div>
            <div className="flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white mt-10 w-full max-w-md p-8 rounded-xl shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 border border-gray-300 rounded bg-white text-black"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
                <input type="password"
                placeholder="Password"
                className="w-full p-3 mb-6 border-gray-300 rounded bg-white text-black" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                 />
                <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">Login</button>
                <p className="text-center text-sm mt-4">
                   Don't have an account?{" "}
                   <Link to="/register" className="text-blue-600 font-medium">Register</Link>
                   
                </p>
            </form>
        </div>
        </div>
    );
}