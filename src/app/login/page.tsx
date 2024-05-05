"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
            const response = await fetch(`${hostname}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Assuming a successful login redirects to a different page
                localStorage.setItem("auth_token", await response.text());

                router.push("/");
            } else {
                // Handle error response
                console.error("Login failed:", await response.text());
            }
        } catch (error) {
            console.error("An error occurred while logging in:", error);
        }
    };

    return (
        <div className="dark min-h-screen flex items-center justify-center bg-white">
            <div
                className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
                style={{
                    boxShadow: '0 8px 14px 0 rgba(0, 0, 0, 0.3)',
                }}
            >
                <h2 className="text-2xl font-semibold text-black text-center">Login</h2>
                <p className="mt-2 text-center text-gray-400">
                    Access more features by signing in
                </p>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label className="text-black" htmlFor="login">
                            Username
                        </label>
                        <input
                            className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            id="login"
                            placeholder="Enter your Username"
                            required
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="text-black" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            id="password"
                            placeholder="Enter your password"
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                        type="submit"
                    >
                        Sign in
                    </button>
                    <button
                        className="w-full mt-4 py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                        type="button"
                        onClick={() => {
                            router.push('/signup');
                        }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
