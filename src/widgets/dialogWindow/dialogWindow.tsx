import React, { FC} from 'react';
import './dialogsWindow.scss';

const DialogsWindow:FC = () => {

    return (
        <div className="sidebar">
            <div className="messages-header">
                <p className="messages">Messages</p>
            </div>
        </div>
    );
};

export default DialogsWindow;