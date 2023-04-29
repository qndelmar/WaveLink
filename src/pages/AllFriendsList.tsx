import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetFriends} from "../shared/hooks/useGetFriends";
import {user} from "../features";
import {DocumentData} from "firebase/firestore";

const AllFriendsList:FC = () => {
    const uid = user().uid || 'none';
    const {kind} = useParams();
    const [getData, data]= useGetFriends(uid,kind || 'all');
    const [friendsList, setFriendsList] = useState<DocumentData | undefined>();
    async function getFriends(){
        await getData();
    }
    useEffect(() => {
        getFriends();
    }, [kind])
    return (
        <div>
            {data ? data.map((el:DocumentData, i:number) => {
                return <div key={i}>{el?.email}</div>
            }) : null}
        </div>
    );
};

export default AllFriendsList;