import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div>
            <h3 className='text-center mt-4'>Blog page</h3>
            <div className='blog-page'>
                <div>
                    <h2>What is cors?</h2>
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    <br/>
                    In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                </div>
                <div>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <h5>**Use these 6 user authentication types to Emplement.</h5>
                    <p>1. Password-based authentication. 2. Two-factor/multifactor authentication. 3. Biometric authentication. 4. Single sign-on. 5. Token-based authentication. 6. Certificate-based authentication.</p>
                </div>
                <div>
                    <h2>How does the private route work?</h2>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div>
                    <h2>what is node? How does Node work?</h2>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;