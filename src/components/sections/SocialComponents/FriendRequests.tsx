import React, { useEffect, useState } from 'react'

function FriendRequests() {
    const [friendRequests, setFriendRequests] = useState<any[]>([]);

    async function getFriendRequests() {
        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        try {
            const res = await fetch(`${hostname}/tutor/get-friend-requests`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token') ?? ''}`,
                },
            });
            let json = await res.json();
            console.log("FR", json);
            setFriendRequests(json);
        } catch (err) {
            console.log(err);
        }
    }

    let handleAccept = async (receiverId: string) => {
        console.log(receiverId);
        // /acceptConnection/:to
        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        try {
            let result = await fetch(`${hostname}/acceptConnection/${receiverId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token') ?? ''}`
                }
            });
            console.log(result.json());
        } catch (err) {
            console.log(err);
        }
    }

    let renderNoFriendRequestsText = () => {
        return (
            <div>
                <h2>No friend requests</h2>
            </div>
        )
    }

    useEffect(() => {
        getFriendRequests();
    }, [])

    return (
        <div className="friendRequests w-1/5 p-4">
            <h1 className="text-xl font-bold mb-4">Friend Requests</h1>
            {friendRequests.map(request => (
                <div
                    key={request.id}
                    className="flex items-center justify-between p-4 my-2 rounded-lg bg-white hover:bg-gray-100 shadow-md transition duration-300"
                >
                    <div className="flex items-center">
                        <img
                            src={request.image}
                            alt={`${request.firstName} ${request.lastName}`}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <span className="text-lg font-bold text-gray-800">
                            {request.firstName} {request.lastName}
                        </span>
                    </div>
                    <button
                        className="px-4 py-2 text-white rounded"
                        style={{ backgroundColor: 'oklch(49.12% 0.3096 275.75 / 1)' }}
                        onClick={() => handleAccept(request.id)}
                    >
                        Accept
                    </button>
                </div>
            ))}

            {friendRequests.length === 0 && renderNoFriendRequestsText()}
        </div>
    )
}

export default FriendRequests;