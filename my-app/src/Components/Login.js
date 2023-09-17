import React, { useState } from "react";
import "./../App.css"; // Adjust the relative path to App.css
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom


function Login({ setIsLoggedIn }) {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/login", { email, password })
            .then(res => {
                console.log(res);
                if (res.data === "Login Successfully") {
                    setIsLoggedIn(true);
                    history("/sidenavbar");
                } else {
                    console.log('Login not successful')
                }


            })


            .catch(err => console.log(err));
    }
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" autoComplete="username" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" autoComplete="current-password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    {/* <a href="#!" className="text-body">Forgot password?</a> */}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                        {/* <a href="#!"  className="link-danger">Register</a> */}
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
export default Login