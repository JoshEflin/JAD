import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Avatar from 'react-avatar-edit'
import Dropzone from 'react-dropzone'

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {
    const [editedImage, setEditedImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/me" />;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

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
                    onCrop={(croppedImage) => setEditedImage(croppedImage)}
                    onClose={onClose}
                    onBeforeFileLoad={onBeforeFileLoad}
                    src={null}
                    className='block'
                />
            </div>
            {/* <button onClick={handleSave} className='inline-block'>Save Avatar</button> */}

            {preview && <img src={preview} alt="Preview" />}
            <p>Username:</p>
            <p className='bg-gray-300 p-2 rounded-md text-lg inline-block'>{user.username}</p>
            <p>Email:</p>
            <p className='bg-gray-300 p-2 rounded-md text-lg inline-block'>{user.email}</p>
        </div>
    )
}

export default Profile;