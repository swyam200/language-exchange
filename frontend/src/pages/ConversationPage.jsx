import { useEffect,useState } from "react";
import API from "../api/axios";
import {useNavigate} from "react-router-dom";
function ConversationPage(){
    const [conversations,setConversations]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchConversations=async()=>{
            try{
                const res=await API.get("/conversations");
                setConversations(res.data);
            }catch(err){
                console.error(err);
            }
        };
    },[]);
    return(
        <div>
            <h2>Your Conversations</h2>
            {conversations.map((conv)=>{
                const otherUser=conv.participants.find(
                    (p)=>p._id !==localStorage.getItem("userId")
                );
                return (
                    <div key={conv.id} onClick={()=>navigate(`/chat/${otherUser}`)} style={{border:"1px solid gray",padding:"10px",margin:"5px",cursor:"pointer"}}><p>{otherUser?.name}</p><p>{conv.lastMessage?.text}</p></div>
                );
            })}
        </div>
    )
}
export default ConversationPage;