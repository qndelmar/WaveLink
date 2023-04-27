
import {getDoc, doc, getFirestore, DocumentData} from 'firebase/firestore';
import {useCallback, useState} from "react";

type FriendsArrayType = DocumentData | undefined;
type HookReturnedValue = [() => Promise<void>, DocumentData | undefined];

export function useGetFriends(uid:string, type:string, amount?:number):HookReturnedValue{
    console.log(amount)
    const [friends, setFriends] = useState<FriendsArrayType>([]);
    const getData = useCallback(
        async ()=> {
            const friendsList:FriendsArrayType = [];
            if(type === "all"){
                const data = await getDoc(doc(getFirestore(), "friends", uid))
                const list = data.data();
                if(list){
                    for(const value in list){
                        const friend = await getDoc(doc(getFirestore(), "users", value.toString()))
                        friendsList.push(friend.data());
                    }
                    setFriends(friendsList);
                }
                else{
                    setFriends(undefined);
                }
            }
        }, [type]
    )
    return [getData, friends];
}