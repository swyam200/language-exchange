export default function Partnerfilter({Search,setSearch,Language,SetLanguage,}){
  return(
    <div className="flex flex-cols md:flex-cols-2">
        <input type="text" placeholder="Search by name" value={Search} onChange={(e)=>setSearch(e.target.value)} className="flex md:flex p-6" />
        <select value={Language} onChange={(e)=>setLanguage(e.target.value)} className="border p-2 rounded">
            <option value="All">All Language</option>
                <option value="English">English</option>
                 <option value="Spanish">Spanish</option>
                  <option value="Hindi">Hindi</option>
                   <option value="Japanese">Japanese</option>
        </select>
    </div>
  );
}