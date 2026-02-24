import { Activity } from "react";

export default function RecentActivity(){
    const activities=[
        "joined spanish practice group",
        "chatted with swyam (English)",
        "joined french beginners"
    ];
    return(
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm text-gray-700">
                {activities.map((activity,index)=>(
                    <li key={index}>. {activity}</li>
                ))}
            </ul>
        </div>
    );
}