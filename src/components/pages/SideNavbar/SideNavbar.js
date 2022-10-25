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
        <div className='bg-black text-white p-2'>
            <h3>Course Title: </h3>
            {
                categories.map(category => <p className='bg-danger' key={category.id}>
                    <Link to={`/category/${category.id}`}> {category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideNavbar;