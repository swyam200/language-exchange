import { Link, useNavigate } from "react-router-dom";
export default function Navbar(){
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
    };
    return(
        <nav className="flex justify-between items-center px-6 py-3 bg-blue-600 text-white">
            <h1 className="text-xl font-bold">Language Exchange</h1>
            <div className="flex gap-4 items-center">
                <Link to="/dashboard">Home</Link>
                <Link to="/groups">Groups</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/find-partners">Find Partner</Link>
                <button onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </div>
        </nav>
    );
}