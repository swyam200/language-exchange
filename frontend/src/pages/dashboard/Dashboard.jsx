import StatCard from "./statsCard";
import MyLanguages from "./MyLanguage";
import RecentActivity from "./RecentActivity";

export default function Dashboard(){
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            {/*statscard*/}
            <div className="grid grid-cols-1 md:drid-cols-3 gap-6">
                <StatCard title="Active Users " value="120+"/>
                <StatCard title="Language Groups" value="15"/>
                <StatCard title="Chats Today" value="15"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MyLanguages/>
                <RecentActivity/>
            </div>
        </div>
    );
}