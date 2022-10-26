import { signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UseContext';
import "./Login.css";

const Login = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            navigate(from, {replace : true})
            toast.success("SuccessFully Sign In with google")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const handleSignInWithGithub = () => {
        signInWithGithub()
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true })
            toast.success("sign in with github")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }


    return (
        <div className='form-style'>
            <h2 className='mb-4'>Log In</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <button className='form-btn' type="submit">
                    Login
                </button>
                {/* <div>
                    <p className='text-danger'>{error}</p>
                </div> */}
            </Form>
            <p className='login-pera'>or</p>
            <div className='social-icons'>
                <span onClick={handleSignInWithGoogle}><FaGoogle></FaGoogle></span>
                <span onClick={handleSignInWithGithub}><FaGithub></FaGithub></span>
            </div>
        </div>
    );
};

export default Login;