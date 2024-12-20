import { useContext, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const navigate = useNavigate()

    const {actions, store} = useContext(Context)
    function handleChange({target}) {
        setUser({
            ...user,
            [target.name]: target.value
        })
        console.log(user)
    }

    async function handleSubmit (event) {
        event.preventDefault()
        
        const response = await actions.register(user)
        console.log("Ejecutado")

        if (response == 200) {
            alert("User created")
            navigate("/login")
        }
        if (response == 400) {
            alert("User already exists")
        }
    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input name="name" value={user.name} onChange={handleChange} type="text" className="form-control" id="name"/>
                            </div>
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
                                <Link to="/login">Already have an account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register