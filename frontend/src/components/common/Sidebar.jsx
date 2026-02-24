import { Link } from "react-router-dom";
export default function Sidebar(){
    return( 
    <aside className="w-60 min-h-screen bg-gray-100 p-4">
        <div className="mb-6">
            <h2 className="font-bold text-lg">Welcome</h2>
            <p className="text-sm text-gray-600">
                Native:Hindi
                Learning:English
            </p>
        </div>
        <ul className="space-y-3 font-medium">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/groups">My Groups</Link></li>
            <li><Link to="/messages">Message</Link></li>
            <li><Link to="/find-partners">Find Partner</Link></li>
        </ul>
    </aside>
    );
}