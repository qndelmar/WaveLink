import React, {FC, useState} from 'react';
import cl from './Profile.module.scss';
import {user} from '../model/';
import defaultProfileImage from '../../shared/assets/images/profile.webp';
import greaterThan from '../../shared/assets/images/greaterthan.svg';
import {useNavigate} from "react-router-dom";
import {getAuth} from "firebase/auth";

const ProfileSketch:FC = () => {
    const [imageUri, setImageUri] = useState<string>(user().photoUri);
    const [email, setEmail] = useState<string>(user().email);
    const [defaultName, setDefaultName] = useState<string>(user().defaultName);
    const navigate = useNavigate();
    const auth = getAuth();
    auth.onAuthStateChanged(() => {
        setImageUri(user().photoUri);
        setEmail(user().email)
        setDefaultName(user().defaultName);
    })
    return (
        <div className={cl.wrapper} onClick={() => navigate('/settings')}>
            <img alt="Profile Image" src={imageUri || defaultProfileImage} className={cl.profile__image}/>
            <div className={cl.text__wrapper}>
                <p>{email}</p>
                <p>{defaultName || 'Set your name'}</p>
            </div>
            <img alt=">" src={greaterThan} className={cl.greater__than}/>
        </div>
    );
};

export default ProfileSketch;