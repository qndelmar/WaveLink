import React, {FC, useEffect, useState} from 'react';
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
    const [chatsArray, setChatsArray] = useState<DocumentData[]>([]);
    useEffect(() => {
        onSnapshot(q, (qSnap) => {
            const chats:DocumentData[] = [];
            qSnap.forEach((doc) => {
                chats.push(doc.data());
            })
            setChatsArray(chats);
        })
    }, [])



    return (
        <div className="additional dialogs">
            <FindOrCreateChat/>
            {chatsArray.map((el:DocumentData, index) => {
                return <div key={index}>{el.firstUser.uid}</div>
            })}
        </div>
    );
};

export default ChatPage;