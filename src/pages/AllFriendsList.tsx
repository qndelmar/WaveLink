import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetFriends} from "../shared/hooks/useGetFriends";
import {user} from "../features";

const AllFriendsList:FC = () => {
    const uid = user().uid || 'none';
    const {kind} = useParams();
    const getData= useGetFriends(uid,kind || 'all');
    const [, setFriendsList] = useState();
    async function getFriends(){
        setFriendsList(await getData());
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