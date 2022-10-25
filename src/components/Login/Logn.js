import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Logn = () => {
    const [accept, setAccept] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }
    return (
        <div>
         <h3>dfsdf</h3>
        </div>
    );
};

export default Logn;