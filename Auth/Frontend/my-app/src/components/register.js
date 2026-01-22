import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handelSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:5000/users/register", state);
            console.log(res.data);
            navigate("/login");

        }catch(error){
            console.error(error);
        }
    
    };

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={state.name}
                    onChange={(e) => setState({ ...state, name: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) => setState({ ...state, password: e.target.value })}
                />

                <button type="submit" onClick={handelSubmit}>Register</button>
            </form>
        </div>
    );
}
