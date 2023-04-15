import React, {FC, useState} from 'react';
import { user} from '../../features';
import defaultImage from '../../shared/assets/images/profile.webp';
import cl from './profileSection.module.scss';
import EditName from "../../entities/ui/EditName";
import {
    Button
} from "@chakra-ui/react";
import ChangingPasswordModal from "../../features/changingPassword/changingPasswordModal";

const ProfileSection:FC = () => {
    const [currentUserImage] = useState<string | null>(user().photoUri || '');
    const [isShown, setIsShown] = useState<boolean>(false);

    return (
        <div>
            <div className={cl.mainData}>
                <img alt="Profile Image" src={currentUserImage || defaultImage} className={cl.img}/>
                <EditName/>
            </div>
            <div className={cl.otherData}>
                <p>Email: {user().email}</p>
                <div className={cl.passwordChange}>
                    <span>Password:  •••••••</span>
                    <Button onClick={() => setIsShown(true)}>Change</Button>
                    <ChangingPasswordModal isShown={isShown} setIsShown={setIsShown}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;