import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:3000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/navigation", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }

    // Inline styles for centering the form
    const formStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    };

    return (
        <>
            <div style={formStyles}>
                {/* <form onSubmit={handleSubmit} style={{ width: "20%", margin: '100px', border: '1px solid black', padding: '20px' }}> */}
                <form action="POST" style={{ width: "20%", margin: '100px', border: '1px solid black', padding: '20px', borderRadius: '20px' }}>
                    <h3 className="my-3">Sign In</h3>

                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            autoComplete="current-password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    <div className="d-grid">
                        <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
                    </div>

                </form>
            </div>

        </>
    )
}

export default Login