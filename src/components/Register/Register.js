import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';

const Register = () => {
    const [accept, setAccept] = useState(false)
    const { createUser, userUpdate } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            userProfileUpdate(name, photoURL)
        })
        .catch(error => {
            console.error(error)
        })
    }


    const userProfileUpdate = (name, photoURL) => {
        return userUpdate(name, photoURL)
        .then(() => {
            alert("Profile Update")
        })
        .catch(error => {
           alert(error.message)
        })
    }



    return (
        <div>
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
                    <Form.Check onClick={(e) => setAccept(e.target.checked)} type="checkbox" label={
                        <>accept <Link to="/terms">terms & conditions</Link></>
                    } />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
                {/* <div>
                    <p className='text-danger'>{error}</p>
                </div> */}
            </Form>
        </div>
    );
};

export default Register;