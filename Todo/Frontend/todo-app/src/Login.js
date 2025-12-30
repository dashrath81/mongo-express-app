import { useState } from "react";
import axios from "axios";

import React from 'react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/loginuser", { email, password });
        alert("Logged in Successfully"); 
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input placeholder="email" text="email" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="password" text="text" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
