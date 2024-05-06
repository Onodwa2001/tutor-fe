import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function TutorSignupForm() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [city, setCity] = useState("");
    const [suburb, setSuburb] = useState("");
    const [price, setPrice] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const form = new FormData(event.target);

        const formObject: any = {};
        form.forEach((value: any, key: any) => {
            formObject[key] = value;
        });

        console.log('Form data:', formObject);

        const user: any = {
            email: formObject.email,
            name: formObject.name,
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            password: formObject.password,
            role: "TUTOR",
            tutor: {
                create: {
                    bio: formObject.bio,
                    chargePerHour: Number.parseFloat(formObject.chargePerHour),
                    city: formObject.city,
                    suburb: formObject.suburb
                }
            }
        }

        try {
            const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
            const response = await fetch(`${hostname}/tutor/signup`, {
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
                <label className="text-black" htmlFor="fname">
                    First Name
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="fname"
                    placeholder="Enter your First name"
                    required
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="lname">
                    Last Name
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="lname"
                    placeholder="Enter your Last name"
                    required
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="price">
                    Charge per hour
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="price"
                    placeholder="Enter your price"
                    required
                    name="chargePerHour"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="bio">
                    Bio
                </label>
                <textarea
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="bio"
                    placeholder="Say something about yourself"
                    required
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="city">
                    city
                </label>
                <textarea
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="city"
                    placeholder="Say something about yourself"
                    required
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="suburb">
                    suburb
                </label>
                <textarea
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="suburb"
                    placeholder="Say something about yourself"
                    required
                    name="suburb"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="signup">
                    Email
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="signup"
                    placeholder="Enter your email"
                    required
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-black" htmlFor="username">
                    Username
                </label>
                <input
                    className="px-3 py-2 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    id="username"
                    placeholder="Enter your Username"
                    required
                    name="name"
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
                onClick={() => router.push('/login')}
            >
                Go to login
            </button>
        </form>
    )
}
