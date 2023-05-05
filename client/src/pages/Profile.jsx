import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Avatar from 'react-avatar'

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const [preview, setPreview] = useState(null);
    function onClose() {
        setPreview(null);
      }
      function onCrop(pv) {
        setPreview(pv);
      }
      function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 71680) {
          alert("File is too big!");
          elem.target.value = "";
        }
      }
    return (
        <div>
            <h1>Profile</h1>
            <Avatar
                width={300}
                height={300}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={null}
            />
            {preview && <img src={preview} alt="Preview" />}
            <p>Username: </p>
            <p>Email: </p>
            <p></p>
        </div>
    )
}

export default Profile;