import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handelsubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/users/login",
                formData
            );
            console.log(res.data);
            alert("Login Successful");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handelsubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
