import React, {FC, useEffect, useState} from 'react';
import cl from "../widgets/profileSection/profileSection.module.scss";
import {Button, FormControl, Input} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {actions, user} from "../features";
import {useUpdateProfile} from "../shared/hooks/useUpdateUser";
import {useAppDispatch} from "../app/store/hooks/hooks";
import {getAuth} from "firebase/auth";

const EditName:FC = () => {
    const auth = getAuth();
    const name = user().defaultName;
    const [userName, setUserName] = useState(name);
    const [isEditNow, setIsEditNow] = useState(false);
    const [updateProfile, loading, error] = useUpdateProfile(auth);
    const [updatedName, setUpdatedName] = useState('');
    const dispatch = useAppDispatch();
    const {setUser} = actions;

    const updateName = async () => {
        if(updatedName.length > 20){
            return;
        }
        await updateProfile({displayName: updatedName});
        if(!error){
            setIsEditNow(false);
            await auth.updateCurrentUser(auth.currentUser);
            dispatch(setUser({
                defaultName: updatedName
            }))
        }
    }

    useEffect(() => {
        setUserName(name);
    }, [user().defaultName])

    return (
            isEditNow ?
                <form className={cl.mainData}>
                    <FormControl className={cl.name}>
                        <Input type="text" value={updatedName} onChange={e => setUpdatedName(e.target.value)}/>
                    </FormControl>
                    <FormControl className={cl.editIcon}>
                        <Button isLoading={loading} onClick={updateName}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </Button>
                    </FormControl>
                </form>
                :
                <div className={cl.mainData}>
                    <p className={cl.name}>{userName}</p>
                    <FontAwesomeIcon onClick={() => setIsEditNow(true)} icon={faPenToSquare} className={cl.editIcon}/>
                </div>
    );
};

export default EditName;