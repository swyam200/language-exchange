export default function MessageBubble({message}){
    const isMe=message.sender==="me";
    return(
        <div className={`max-w-xs px-4 py-2 rounded-lg ${isMe? "bg-blue-600 text-white self-end":"bg-gray-200 text-black self-start"}`}>{message.text}</div>
    );
}