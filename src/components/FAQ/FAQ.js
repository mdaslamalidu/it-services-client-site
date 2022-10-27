import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./FAQ.css";

const FAQ = () => {
    return (
        <div className='faq-container'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What I Have Done In This Project!!</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Create Education Related or any Course Related Website</li>
                            <li>Design Must be unique</li>
                            <li>Create a Navbar with meanigful options like website logo, website name and etc</li>
                            <li>In this website will have course section inside this section will have shown course name with image.</li>
                            <li>Must use react this website</li>
                            <li>use firebase for login and registration</li>
                            <li>Finally, Use private route for private section</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;