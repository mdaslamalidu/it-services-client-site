import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UseContext';

const Register = () => {
    const [accept, setAccept] = useState(false)
    const [error, setError] = useState('');
    const { createUser, userUpdate, signInWithGoogle, signInWithGithub } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please give a valid Email")
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password Provide at least two uppercase")
            return;
        }

        if (password.length < 6) {
            setError("Password Provide at least 6 character")
            return;
        }

        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Password Provide at least one special character")
            return;
        }

        setError("");

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            toast.success("congratulations your new account!!")
            userProfileUpdate(name, photoURL)
            form.reset()
        })
        .catch(error => {
            console.error(error)
        })
    }


    const userProfileUpdate = (name, photoURL) => {
        return userUpdate(name, photoURL)
        .then(() => {
            toast.success("Profile Update")
        })
        .catch(error => {
           alert(error.message)
        })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
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
                toast.success("sign in with github")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className='form-style'>
            <h2 className='mb-4'>Registration</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo Url</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={(e) => setAccept(e.target.checked)} type="checkbox" label="Terms & Conditions"/>
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <button style={{backgroundColor: "black", color: "white",}} className='btn btn-black w-100 py-2 mt-3' type="submit" disabled={!accept}>
                    Register
                </button>
                <p className='mt-2'>Already Have An Account? <Link to="/login">Login</Link></p>
            </Form>

            <p className='login-pera'>or</p>
            <div className='social-icons'>
                <span onClick={handleSignInWithGoogle}><FaGoogle></FaGoogle></span>
                <span onClick={handleSignInWithGithub}><FaGithub></FaGithub></span>
            </div>

        </div>
    );
};

export default Register;