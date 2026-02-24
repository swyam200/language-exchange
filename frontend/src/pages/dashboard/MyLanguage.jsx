export default function MyLanguages(){
    const language=[
        {name:"English",level:"Fluent"},
        {name:"Spanish",level:"Learning"}
    ];
    return(
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">My Language</h2>
            <ul className="space-y-3">
                {language.map((lang,index)=>(
                    <li key={index} className="flex justify-between border-b pb-2">
                        <span>{lang.name}</span>
                        <span className="text-sm text-gray-500">{lang.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}