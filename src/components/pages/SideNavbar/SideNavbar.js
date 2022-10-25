import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/category")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='bg-black text-white p-2 sticky-top'>
            <h3>Course Title: </h3>
            {
                categories.map(category => <Link to={`/category/${category.id}`} style={{textDecoration: "none", color: "white"}} key={category.id}> <p>{category.name}</p></Link>    
                )
            }
        </div>
    );
};

export default SideNavbar;