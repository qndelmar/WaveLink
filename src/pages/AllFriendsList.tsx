import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetFriends} from "../shared/hooks/useGetFriends";
import {user} from "../features";
import {DocumentData} from "firebase/firestore";

const AllFriendsList:FC = () => {
    const uid = user().uid || 'none';
    const {kind} = useParams();
    const [getData,data]= useGetFriends(uid,kind || 'all');
    const [, setFriendsList] = useState<DocumentData | undefined>();
    async function getFriends(){
        await getData();
        setFriendsList(data);
    }
    useEffect(() => {
        getFriends();
    }, [])
    return (
        <div>
        </div>
    );
};

export default AllFriendsList;