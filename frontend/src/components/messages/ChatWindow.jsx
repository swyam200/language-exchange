import MessageBubble from "./MessageBubble";
export default function ChatWindow({user,messages}){
    if(!user){
        return(
            <div className="flex-1 flex items-center justify-center text-gray-500">
                Select  a conversation
            </div>
        );
    }
    return (
        <div className="flex-1 p-4 flex flex-col">
            <div className="p-4 border-b font-bold">{user.name}</div>
            <div className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">{messages.map((msg)=>(
                <MessageBubble key={msg.id} message={msg}/>
            ))}</div>
            <div className="p-4 border-t">
                <input type="text" placeholder="Type a message"  className="w-full border rounded p-2"/>
            </div>
        </div>
    );
}