import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./SideNavbar.css";


const SideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/category")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='bg-black text-white p-2 sticky-top-style'>
            <h3>Course Title: </h3>
            {
                categories.map(category => <Link to={`/singleCourse/${category.id}`} style={{ textDecoration: "none", color: "black", }} key={category.id}> <p className='bg-warning rounded p-2 hover-style'>{category.name}</p></Link>   
                )
            }
        </div>
    );
};

export default SideNavbar;