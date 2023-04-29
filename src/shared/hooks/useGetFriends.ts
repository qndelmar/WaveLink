import {getDoc, doc, getFirestore, DocumentData, where} from 'firebase/firestore';
import React, {useCallback, useState, Dispatch, useEffect} from "react";

type FriendsArrayType = DocumentData | undefined;
type HookReturnedValue = [() => Promise<void>, DocumentData | undefined];
type getFriendsFunctions = [FriendsArrayType, Dispatch<React.SetStateAction<FriendsArrayType>>]

export function useGetFriends(uid:string, type:string, amount?:number):HookReturnedValue{
    const [friends, setFriends] = useState<FriendsArrayType>([]);
    const getData = useCallback(
        async ()=> {
            if(type === "all"){
                await getAllFriends(friends, setFriends, uid);
                return;
            }
            if(type === "closed"){
                await getClosedFriends(friends, setFriends, uid);
                return;
        }}, [type]
    )
    return [getData, friends];
}

async function getAllFriends(friends:FriendsArrayType, setFriends:Dispatch<React.SetStateAction<FriendsArrayType>>, uid:string){
    const friendsList:FriendsArrayType = [];
    const data = await getDoc(doc(getFirestore(), "friends", uid))
    const list = data.data();
    if(list){
        for(const value in list){
            const friend = await getDoc(doc(getFirestore(), "users", value.toString()))
            friendsList.push(friend.data());
        }
        setFriends(friendsList);
        console.log(friends);
    }
    else{
        setFriends(undefined);
    }
}

async function getClosedFriends(friends:FriendsArrayType, setFriends:Dispatch<React.SetStateAction<FriendsArrayType>>, uid:string) {
    const data = await getDoc(doc(getFirestore(), "friends", uid))
    const friendsList: FriendsArrayType = [];
    const list = data.data();
    if (list) {
        for (let i = 0; i < list.closed.length; i++) {
            const friend = await getDoc(doc(getFirestore(), "users", list.closed[i].toString()));
            friendsList.push(friend.data());
        }
        setFriends(friendsList);
    }
    else {
        setFriends(undefined);
    }
}