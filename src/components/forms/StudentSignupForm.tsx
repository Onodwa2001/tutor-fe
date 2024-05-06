import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function StudentSignupForm() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [grade, setGrade] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const form = new FormData(event.target);
        
        const formObject: any = {};
        form.forEach((value: any, key: any) => {
            formObject[key] = value;
        });

        // Log the form object to the console (for demonstration purposes)
        console.log('Form data:', formObject);

        const user: any = {
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            email: formObject.email,
            name: formObject.name,
            password: formObject.password,
            role: "STUDENT",
            student: {
                create: {
                    grade: formObject.grade
                }
            }
        }

        try {
            const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
            const response = await fetch(`${hostname}/student/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                // localStorage.setItem("auth_token", await response.text());
                router.push("/login");
            } else {
                // Handle error response
                console.error("Sign up failed:", await response.text());
            }
        } catch (error) {
            console.error("An error occurred while signing up:", error);
        }
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            
            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="firstName">
                    First Name
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="firstName"
                    placeholder="Enter your First name"
                    required
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="lastName"
                    placeholder="Enter your Last name"
                    required
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="grade">
                    Grade
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="grade"
                    placeholder="Enter your grade"
                    required
                    name="grade"
                    type="number"
                    min={1}
                    max={12}
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="email">
                    Email
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="username-stud">
                    Username
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="username-stud"
                    placeholder="Enter your Username"
                    required
                    name="name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="flex flex-col mb-6">
                <label className="text-black" htmlFor="password-stud">
                    Password
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="password-stud"
                    placeholder="Enter your password"
                    required
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                type="submit"
            >
                Sign up
            </button>
            <button
                className="w-full mt-4 py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                type="button"
            >
                Go to login
            </button>
        </form>
    )
}
