import React, {FC} from 'react';
import FindOrCreateChat from "../features/findOrCreateChat/findOrCreateChat";
import { collection, query, where, onSnapshot, getFirestore, or } from "firebase/firestore";
import {user} from '../features';
import {DocumentData} from 'firebase/firestore'

const ChatPage:FC = () => {
    const currentUser = user();
    const firestore = getFirestore();
    const q = query(collection(firestore, 'userChats'), or(
        where('firstUser.uid', '==', currentUser.uid),
        where('secondUser.uid', '==', currentUser.uid)
    ))
    const chatsArray:DocumentData = [];
    onSnapshot(q, (qSnap) => {
        qSnap.forEach((doc) => {
            chatsArray.push(doc.data());
        })
    })
    console.log(chatsArray[0]?.firstUser.email);

    return (
        <div className="additional dialogs">
            <FindOrCreateChat/>
            {chatsArray.map((el:DocumentData) => {
                return <div key={Date.now()}>{el.firstUser.email}</div>
            })}
        </div>
    );
};

export default ChatPage;