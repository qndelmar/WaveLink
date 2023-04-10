import React, {FC} from 'react';
import DialogsWindow from "../../widgets/dialogWindow/dialogWindow";
import Header from "../../widgets/header/Header";
import './main.scss';
import SendMessage from "../../widgets/sendMessage/sendMessage";

const Main:FC = () => {
    return (
        <div className="wrapper">
            <DialogsWindow/>
            <div className="content-part">
                <Header/>
                <SendMessage/>
            </div>
        </div>
    );
};

export default Main;