import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import API from "../../api/axios"
export default function Register(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!name || !email || !password){
            alert("please fill the form first");
            return;
        }
        try{
            setLoading(true);
            const res=await API.post("/auth/register",{ name,email,password,});
            alert("Registation Successful");
            navigate("/login");
        }catch(error){
            console.error(error);
            alert(error.response?.data?.message || "Registation failed");
        }finally{
            setLoading(false);
        }
    };
    return(
        <div className="min-h-screen grid grid-cols-1 md-grid-col-2">
            <div className=" md:flex items-center justify-center bg-blue-600 text-white">
                <div className="text-center px-10">
                    <h1 className="text-4xl font-bold mb-4">Language Exchange</h1>
                    <p className="text-lg">Practice Language with people around the world</p>
                </div>
            </div>
        <div className="flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <input
                 type="text"
                 name="name"
                 placeholder="Name"
                 className="w-full p-2 mb-4 border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 required
                />
                <input 
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                 />
                 <input type="password"
                 name="password"
                 placeholder="Password"
                 className="w-full p-2 mb-4 border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 required
                 />
                 <button className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
                 <p className="text-sm text-center mt-4 text-black">Already have an account?{" "}
                    <Link to="/login" className="text-blue-600">Login</Link>
                 </p>
            </form>
        </div>
        </div>
    );
}
