import { useState } from "react";
import PartnerCard from "../components/Partners/PartnerCard";
export default function FindPartners(){
    const [language,setLanguage]=useState("All");
    const users=[
        {
            id:1,
            name:"Maria",
            speaks:"Spanish",
            learning:"English",
        },
        {
            id:2,
            name:"Swyam",
            speaks:"Hindi",
            learning:"Russian",  
        },
        {
            id:3,
            name:"John",
            speaks:"English",
            learning:"Japanese",  
        },
    ];
    const filteredUsers=
    language==="All"? users: users.filter(
        (user)=>
            user.speaks===language || user.learning===language
    );
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Find Language Partners</h1>
            <select value={language} onChange={(e)=>setLanguage(e.target.value)}
            className="border p-2 rounded">
                <option value="All">All Language</option>
                <option value="English">English</option>
                 <option value="Spanish">Spanish</option>
                  <option value="Hindi">Hindi</option>
                   <option value="Japanese">Japanese</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredUsers.map((user)=>(
                <PartnerCard key={user.id} user={user}/>
                ))}
            </div>
        </div>
    );
}