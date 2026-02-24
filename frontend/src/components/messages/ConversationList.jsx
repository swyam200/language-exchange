export default function ConversationList({users,selectedId,onselect}){
return (
    <div className="w-64 border-r bg-white">
        <h2 className="p-4 font-bold border-b">Chats</h2>
        {users.map((user)=>(
            <div key={user.id} onClick={()=>onselect(user)} className={`p-4 cursor-pointer hover:bg-gray-100 ${selectedId===user.id ?"bg-gray-100":""}`}>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">
                    {user.lasrMessage}
                </p>
            </div>
        ))}
    </div>
);
}