import React, {FC} from 'react';
import {Button, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {PlusSquareIcon, SearchIcon} from '@chakra-ui/icons';
import './findOrCreateChat.scss'

const FindOrCreateChat:FC = () => {

    return (
        <div className="grid-2-col">
            <InputGroup>
                <Input/>
            <InputRightElement>
                <SearchIcon/>
            </InputRightElement>
            </InputGroup>
            <Button mx={8}>
                <PlusSquareIcon boxSize={6} mr={4}/>
                Add chat
            </Button>
        </div>
    );
};

export default FindOrCreateChat;