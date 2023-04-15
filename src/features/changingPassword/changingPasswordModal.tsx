import React, {Dispatch, FC, useState} from 'react';
import {
    Button,
    FormControl,
    FormErrorMessage, Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import cl from './changingPasswordModal.module.scss'
import {useUpdatePassword} from "../../shared/hooks/useUpdateUser";
import {getAuth} from "firebase/auth";

type ChangeType = {
    isShown: boolean,
    setIsShown: Dispatch<React.SetStateAction<boolean>>
}

const ChangingPasswordModal:FC<ChangeType> = ({isShown, setIsShown}) => {
    const [firstPass, setFirstPass] = useState<string>('');
    const [secondPass, setSecondPass] = useState<string>('');
    const auth = getAuth();
    const [updatePassword, loading, error] = useUpdatePassword(auth);

    const updatePass = async () => {
        if(secondPass === firstPass){
            await updatePassword(firstPass);
            if(!error){
                setIsShown(false);
                setFirstPass('')
                setSecondPass('')
            }
        }
    }
    return (
        <Modal isCentered  isOpen={isShown} onClose={() => setIsShown(false)}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{'Change your password error'}</ModalHeader>
                <ModalBody>
                    <form>
                        <FormErrorMessage>{error?.toString()}</FormErrorMessage>
                        <FormControl className={cl.input} >
                            <Input placeholder="New password" type="password" value={firstPass} onChange={(e) => setFirstPass(e.target.value)}/>
                        </FormControl >
                        <FormControl className={cl.input} >
                            <Input placeholder="Repeat new password" type="password" value={secondPass} onChange={(e) => setSecondPass(e.target.value)}/>
                        </FormControl>
                        <Button isLoading={loading} className={cl.input} onClick={updatePass}>
                            Send
                        </Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ChangingPasswordModal;