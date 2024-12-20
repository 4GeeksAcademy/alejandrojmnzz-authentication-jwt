import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { actions, store } = useContext(Context)

    const navigate = useNavigate()

    function handleChange({ target }) {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        actions.login(user)
        const response = await actions.login(user)

        if (response == 400) {
            alert("User not found")
        }
        if (response == 200) {
            alert("Logged")
            navigate("/private")
        }
        if (response == 300) {
            alert("Incorret credentials")
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input name="email" value={user.email} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input name="password" value={user.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <div className="d-flex justify-content-center">
                                <Link to="/register">You don't have an account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login