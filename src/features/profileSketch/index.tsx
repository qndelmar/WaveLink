import React, {FC, useState} from 'react';
import cl from './Profile.module.scss';
import {user} from '../model/';
import defaultProfileImage from '../../shared/assets/images/profile.webp';
import greaterThan from '../../shared/assets/images/greaterthan.svg';
import {useNavigate} from "react-router-dom";

const ProfileSketch:FC = () => {
    const [imageUri] = useState<string>(user().photoUri);
    const [email] = useState<string>(user().email);
    const [defaultName] = useState<string>(user().defaultName);

    const navigate = useNavigate();
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