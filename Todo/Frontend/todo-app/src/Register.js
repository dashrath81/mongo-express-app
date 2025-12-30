import { useState } from "react";
import axios from "axios";

import React from 'react'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); 
    const res = await axios.post("http://localhost:5000/registeruser", {  email,password });
    alert("Registered Successfully");
  }
  return (
    <>
      <form onSubmit={handleRegister}>
        <input placeholder="email" text="email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="password" text="text" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>

      </form>
    </>
  )
}

