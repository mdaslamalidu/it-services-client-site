import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./SideNavbar.css";


const SideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://educationnal-server-site.vercel.app/category")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='text-white p-2 sticky-top-style'>
            <h3 className='mb-3'>Course Name: </h3>
            {
                categories.map(category => <Link to={`/singleCourse/${category.id}`} style={{ textDecoration: "none", color: "black", }} key={category.id}> <p className='bg-danger text-white rounded p-2'>{category.name}</p></Link>   
                )
            }
        </div>
    );
};

export default SideNavbar;