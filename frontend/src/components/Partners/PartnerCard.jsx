export default function PartnerCard({user}){
    return (
        <div className="bg-white p-6 rounded-xl shadoe">
            <h2 className="text-xl fond-bold">{user.name}</h2>
            <p className="text-sm text-gtay-600 mt-2">Speaks: <strong>{user.speaks}</strong></p>
            <p className="text-sm text-gray-600">Learning: <strong>{user.learning}</strong></p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">connect</button>
        </div>
    );
}