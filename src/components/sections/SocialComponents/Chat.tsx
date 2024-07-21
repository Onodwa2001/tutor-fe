import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Chat() {
    const [messages, setMessages] = useState<any>([]);
    const [input, setInput] = useState<any>('');
    const [loggedInUser, setLoggedInUser] = useState<any>();
    const searchParams = useSearchParams();
    const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    const [friend, setFriend] = useState<any>();

    const handleSendMessage = (e: any) => {
        e.preventDefault();

        if (input.trim()) {
            // setMessages([...messages, { id: Date.now(), text: input }]);
            fetch(`${hostname}/message/add/${searchParams.get('id') || ''}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token') ?? ''}`,
                },
                body: JSON.stringify({
                    content: input
                })
            });
            setInput('');
        }
    };

    const findUser = (id: string) => {
        fetch(`${hostname}/user/get/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setFriend(data)
            })
            .catch(error => console.error('Error fetching user:', error));
    }

    const getMessagesFromServer = (receiverId: string) => {
        fetch(`${hostname}/message/get-all-messages/${receiverId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token') ?? ''}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMessages(data)
            })
            .catch(error => console.error('Error fetching messages:', error));
    }

    useEffect(() => {
        const search = searchParams.get('id') || '';
        findUser(search);

        const interval = setInterval(() => {
            getMessagesFromServer(search?.toString());
        }, 1000);

        return () => clearInterval(interval);
    }, [searchParams])

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100" style={{ width: '60%' }}>
            <div className="user-details"
                style={{
                    backgroundColor: 'white',
                    padding: 20,
                    marginBottom: 10
                }}
                >
                <h1>{friend?.firstName} {friend?.lastName}</h1>
            </div>
            <div className="flex-grow overflow-y-auto p-4 bg-white rounded shadow-sm">
                {messages.map((message: any) => (
                    <div key={message.id} className="my-2">
                        <div className={"p-2 rounded shadow-sm bg-blue-200"}>{message.content}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="mt-4 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-r shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat