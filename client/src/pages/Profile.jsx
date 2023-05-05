import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <img></img>
            <p>Username: </p>
            <p>Email: </p>
            <p></p>
        </div>
    )
}

export default Profile;