import { useState } from "react";
import ConversationList from "../components/messages/ConversationList";
import ChatWindow from "../components/messages/ChatWindow";
export default function Message(){
    const users=[
        {id:1,name:"Maria",LastMessage:"nice"},
        {id:2,name:"Swyam",LastMessage:"Good"},
        {id:3,name:"Gupta",LastMessage:"xyz"},
    ];
    const Chats={
        1:[{id:1,sender:"me",text:"Hi"},
            {id:2,sender:"T",text:"Hello"}, 
        ],
        2:[{id:1,sender:"T",text:"Hi"},
            {id:2,sender:"R",text:"Hello"},
        ],
        3:[{id:1,sender:"L",text:"Hi"},
            {id:2,sender:"U",text:"Hello"},
        ],
    };
    const [selectedUser,SetSelectedUser]=useState(null);
    return(
        <div className="flex h-[calc(100vh-64px)] bg-gray-50">
            <ConversationList
            users={users}
            selectedId={selectedUser?.id}
            onselect={SetSelectedUser}/>
            <ChatWindow
             user={selectedUser}
             messages={selectedUser ? Chats[selectedUser.id]:[]}/>
        </div>
    );
}