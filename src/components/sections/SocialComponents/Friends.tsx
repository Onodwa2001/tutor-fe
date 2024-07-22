import { decodeJwtToken } from '@/app/utils/auth-token';
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Friends() {
    const [friends, setFriends] = useState<any[]>([]);
    const [loggedInUser, setLoggedInUser] = useState<any>(null);

    let getFriends = async () => {
        const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
        try {
            const res = await fetch(`${hostname}/tutor/get-connections`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token') ?? ''}`,
                },
            });
            let json = await res.json();
            console.log("friends", json);
            setFriends(json);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token') || '';
        const user = decodeJwtToken(authToken);
        setLoggedInUser(user);

        getFriends();
    }, []);

    return (
        <div className="friends w-1/5 p-4">
            <h1 className="text-xl font-bold mb-4">Friends</h1>
            {friends.map(friend => (
                <div
                    key={friend.id}
                    className="flex items-center justify-between p-4 my-2 rounded-lg bg-white hover:bg-gray-100 shadow-md transition duration-300"
                >
                    <div className="flex items-center">
                        <img
                            // src={friend.image}
                            style={{ border: 'solid white 4px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)' }}
                            src={'https://unsplash.com/photos/black-haired-man-making-face-sibVwORYqs0'}
                            alt={`${friend.firstName} ${friend.lastName}`}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <span className="text-sm text-gray-800">
                            {friend.firstName} {friend.lastName}
                        </span>
                    </div>
                    {/* <Link href={"/social?id=" + friend.id}> */}
                        <button
                            className="px-4 py-2 text-white rounded"
                            style={{ backgroundColor: 'inherit' }}
                            onClick={() => {
                                window.location.href = "http://" + window.location.host + window.location.pathname + "?id=" + friend.id;
                            }}
                        >
                            <FontAwesomeIcon icon={faMessage} color='black' size='lg' />
                        </button>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    )
}

export default Friends