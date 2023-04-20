import React, {FC, useState} from 'react';
import {actions, user} from '../../features';
import defaultImage from '../../shared/assets/images/profile.webp';
import cl from './profileSection.module.scss';
import EditName from "../../entities/EditName";
import {
    Button
} from "@chakra-ui/react";
import ChangingPasswordModal from "../../features/changingPassword/changingPasswordModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import {getAuth, signOut} from "firebase/auth";
import {useAppDispatch} from "../../app/store/hooks/hooks";

const ProfileSection:FC = () => {
    const [currentUserImage] = useState<string | null>(user().photoUri || '');
    const [isShown, setIsShown] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const {removeUser} = actions;

    const auth = getAuth();
    async function logOut() {
        await signOut(auth);
        dispatch(removeUser())
    }

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
            <Button onClick={logOut}>
                <FontAwesomeIcon icon={faSignOut}/>
            </Button>
        </div>
    );
};

export default ProfileSection;