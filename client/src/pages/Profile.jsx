import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Avatar from 'react-avatar-edit'

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
        <div className='text-center justify-center h-full my-10'>
            <h1>Profile</h1>
            <p>Avatar:</p>
            <div className='inline-block'>
                <Avatar
                    width={200}
                    height={200}
                    onCrop={onCrop}
                    onClose={onClose}
                    onBeforeFileLoad={onBeforeFileLoad}
                    src={null}
                    className='block'
                />
            </div>
                {/* {preview && <img src={preview} alt="Preview" />} */}
            <p>Username:</p>
            <p className='bg-gray-300 p-2 rounded-md text-lg inline-block'>Alexander1262</p>
            <p>Email:</p>
            <p className='bg-gray-300 p-2 rounded-md text-lg inline-block'>weisssander@gmail.com</p>
        </div>
    )
}

export default Profile;