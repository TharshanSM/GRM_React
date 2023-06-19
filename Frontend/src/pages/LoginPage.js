import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);

        if (username.trim() === "") {
            setUsernameError(true);
        }

        // Validation
        if (username.trim() === "Admin" && password.trim() === "Admin123") {
            navigate("/dashboard", { state: { role: "admin" } });
        } else if (
            username.trim() === "John" &&
            password.trim() === "John123"
        ) {
            navigate("/dashboard", { state: { role: "emp" } });
        } else {
            alert("Invalid Username/Password");
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUsernameError(false);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a
                                        href="index.html"
                                        className="logo d-flex align-items-center w-auto"
                                    >
                                        <img src="/logo.png" alt="" />
                                        <span className="d-none d-lg-block">
                                            GRM
                                        </span>
                                    </a>
                                </div>
                                {/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>
                                            <p className="text-center small">
                                                Enter your username &amp;
                                                password to login
                                            </p>
                                        </div>
                                        <form
                                            className="row g-3 needs-validation"
                                            noValidate=""
                                            onSubmit={handleFormSubmit}
                                        >
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourUsername"
                                                    className="form-label"
                                                >
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span
                                                        className="input-group-text"
                                                        id="inputGroupPrepend"
                                                    >
                                                        @
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required=""
                                                        value={username}
                                                        onChange={
                                                            handleUsernameChange
                                                        }
                                                    />
                                                    {usernameError && (
                                                        <div className="invalid-feedback">
                                                            Please enter your
                                                            username.
                                                        </div>
                                                    )}
                                                    {/* <div className="invalid-feedback">
                                                        Please enter your
                                                        username.
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required=""
                                                    value={password}
                                                    onChange={
                                                        handlePasswordChange
                                                    }
                                                />

                                                {/* <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div> */}
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="remember"
                                                        defaultValue="true"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Don't have account?
                                                    <a href="pages-register.html">
                                                        Create an account
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoginPage;
