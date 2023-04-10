import React, {FC} from 'react';
import {Button, Input} from "@chakra-ui/react";
import './index.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const SendMessage:FC = () => {
    return (
        <div className="sendMessage">
            <Input w="85%" ml="1em" placeholder="Type your message here..">
            </Input>
            <Button ml="1em">
                Send
                <FontAwesomeIcon className="faPlaneIcon" icon={faPaperPlane} />
            </Button>
        </div>
    );
};

export default SendMessage;