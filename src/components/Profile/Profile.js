import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div style={{height: "500px"}} className='d-flex justify-content-center align-items-center my-5'>
            {
                user?.uid ? 
                <div>
                    <h2 className='text-center'>{user?.displayName}</h2>
                    <img className='w-100 rounded-circle' src={user?.photoURL} alt="" />
                </div>
                : 
                <div>
                    <h1>please login to see about your information!!</h1>
                </div>

            }
        </div>
    );
};

export default Profile;